<template>
  <div>
    <video id="videoCamera" autoplay></video>
    <img id="save_img" :src="imgSrc" alt="" />
    <canvas
      style="display: none"
      id="canvasCamera"
      :width="videoWidth"
      :height="videoHeight"
    ></canvas>
    <!--确认-->
    <el-button @click="handlePhotograph">拍照</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
let videoWidth = ref(300)
let videoHeight = ref(200)
let currentCamera = ref<any>()
let imgSrc = ref<any>()
const cameraList = ref([{ id: '', label: '摄像头1' }])
// let cameraList = reactive<any>({ id: '', label: '摄像头' })
const thisCanvas = ref(null)
const thisContext = ref(null)
const thisVideo = ref(null)
onMounted(() => {
  getDevices().then((res) => {
    if (res.length) {
      cameraList.value = res
    }
    currentCamera.value = cameraList.value[0].id
    main()
  })
})
function main() {
  thisCanvas.value = document.getElementById('canvasCamera')
  thisContext.value = thisCanvas.value.getContext('2d')
  thisVideo.value = document.getElementById('videoCamera')
  enableCamera(currentCamera.value)
}
async function getDevices() {
  console.log('1111', navigator.mediaDevices)
  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    alert('不支持 mediaDevices.enumerateDevices()')
    console.log('设备不支持 ')
  }
  try {
    const devices = await navigator.mediaDevices.enumerateDevices()
    const cameraList = devices
      .filter((device) => device.kind === 'videoinput')
      .map((device) => ({
        id: device.deviceId,
        label: device.label,
      }))
    return cameraList
  } catch (err) {
    console.log(err.name + ':' + err.message)
    throw err
  }
}

function getUserMedia(deviceId, success, error) {
  const constraints = {
    audio: false,
    video: {
      width: videoWidth.value,
      height: videoHeight.value,
      transform: 'scaleX(-1)',
      deviceId: deviceId,
    },
  }
  if (navigator.mediaDevices.getUserMedia) {
    // 最新的标准API
    navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error)
  } else if (navigator.webkitGetUserMedia) {
    // webkit核心浏览器
    navigator.webkitGetUserMedia(constraints, success, error)
  } else if (navigator.mozGetUserMedia) {
    // firfox浏览器
    navigator.mozGetUserMedia(constraints, success, error)
  } else if (navigator.getUserMedia) {
    // 旧版API
    navigator.getUserMedia(constraints, success, error)
  }
}

function enableCamera(deviceId) {
  getUserMedia(
    (deviceId, stream) => {
      if ('srcObject' in thisVideo.value) {
        thisVideo.value.srcObject = stream
      } else {
        // 避免在新的浏览器中使用它，新浏览器正在被弃用。没有开启摄像头权限或浏览器版本不兼容
        thisVideo.value.src = window.URL.createObjectURL(stream)
      }
      thisVideo.value.onloadedmetadata = (e) => {
        thisVideo.value.play()
      }
    },
    (error) => {
      console.log(`访问用户媒体设备失败${error.name}, ${error.message}`)
      alert(
        '摄像头打开失败，请检查摄像头并点击浏览器地址栏右侧的摄像头标志进行开启设置',
      )
    },
  )
}

function handlePhotograph() {
  thisContext.value.drawImage(thisVideo.value, 0, 0, 300, 200)
  imgSrc.value = thisCanvas.value.toDataURL('image/png', 0.7)
}
</script>

<style scoped></style>
