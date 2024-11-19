import * as topojson from 'topojson-client'
// import * as fs from 'fs/promises';
import * as jsonfile from 'jsonfile'

// 指定文件路径
const filePath = './shanghai.json'

// 读取 TopoJSON 文件
jsonfile
  .readFile(filePath)
  .then((topoJsonData) => {
    // 假设 TopoJSON 文件中有一个名为 "shanghai" 的对象
    const geojsonData = topojson.feature(
      topoJsonData,
      topoJsonData.objects.shanghai,
    )

    // 输出 GeoJSON 文件
    return jsonfile.writeFile('./shanghai.geojson', geojsonData)
  })
  .then(() => {
    console.log('GeoJSON file has been saved!')
  })
  .catch((error) => {
    console.error('An error occurred:', error)
  })
