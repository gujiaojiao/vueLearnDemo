<template>
  <div @click="download" class="classA">
    Fabric View
  </div>
  <div ref="canvasContainer" class="canvas-container"></div>
  <!-- <canvas id="c" width="800" height="600"></canvas> -->
</template>
<script setup>
import * as fabric from 'fabric';
// import { StaticCanvas, FabricText } from 'fabric';
const { StaticCanvas, FabricText, Text } = fabric;
import { onMounted, ref } from 'vue';
import chaiquanImage from '@/assets/images/chaiquan.png'
const canvasContainer = ref(null);
const canvas = new StaticCanvas();
const helloWorld = new FabricText('Hello world!');
canvas.add(helloWorld);
canvas.centerObject(helloWorld);
const imageSrc = canvas.toDataURL();

// var canvasSecond = new fabric.Canvas('c')
// var rect = new fabric.Rect({
//   left: 500,
//   top: 500,
//   fill: 'blue',
//   width: 20,
//   height: 20
// });
// canvasSecond.add(rect);
// canvasSecond.renderAll();
// some download code down here
const download = () => {
  const a = document.createElement('a');
  a.href = imageSrc;
  a.download = 'image.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const renderCanvas = () => {
  const c = document.createElement('canvas');
  c.width = 800;
  c.height = 600;
  canvasContainer.value.appendChild(c);
  const canvas = new fabric.Canvas(c);
  //   canvasInstance.value = canvas;

  const rect = new fabric.Rect({ left: 300, top: 200, fill: 'blue', width: 20, height: 20, angle: 45 });
  const circle = new fabric.Circle({ left: 200, top: 200, fill: 'red', radius: 10 });

  canvas.add(rect, circle);

  fabric.util.animate({
    startValue: rect.left,
    endValue: 400,
    duration: 1500,
    easing: fabric.util.ease.easeInOutQuad,
    onChange: (value) => {
      rect.set('left', value);
      canvas.requestRenderAll();
    },
    onComplete: () => console.log("✅ 动画完成！当前 left:", rect.left)
  });


  //原生image
  const imgEl = new Image();
  imgEl.src = chaiquanImage;
  imgEl.onload = () => {
    const fImg = new fabric.Image(imgEl, { left: 100, top: 100, angle: 30, opacity: 0.95 });
    fImg.filters.push(
      new fabric.filters.Sepia(),
      new fabric.filters.Brightness({ brightness: 0.3 })
    );
    fImg.applyFilters();
    fImg.scaleToWidth(150);
    canvas.add(fImg);
    canvas.renderAll();
  };
  imgEl.onerror = (e) => console.warn('image load failed', e);
  //fabric
  //   fabric.Image.fromURL(chaiquanImage, img => {
  //     img.scaleToWidth(150);
  //     canvas.add(img);
  //     canvas.renderAll();
  //   });
}
onMounted(() => {
  renderCanvas();
});

</script>
<style scoped>
.classA {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>