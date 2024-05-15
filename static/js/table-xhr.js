$(document).ready(function(){
  if(window.location.pathname.includes('subscription')) {
    setTimeout(()=> {
      let xhr = new XMLHttpRequest();
      xhr.open("get", "http://127.0.0.1:8125/tableList?userId=20")
      xhr.send()
       //4、监听 onreadystatechange 事件
       xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {  //固定写法
            //数据获取成功，获取服务器响应的数据 
            // console.log(JSON.parse(xhr.responseText).data)
            $("#myTable tbody")[0].innerHTML = tableBodyFormat(JSON.parse(xhr.responseText).data)
        }
      }
    }, 2000)
  }
})

function tableBodyFormat(data) {
  let str = ""
  data.forEach(i => {
    let valueArr = []
    i.forEach(t => {
      let _str = ""
      _str = `<td class="data-td ${t.class ? t.class : ''}">`
      if(t.imageFront) {
        _str += `<img
          src="${t.imageFront ? t.imageFront : ""}" 
          class="imageFront"
          width="${t.imageFront ? (t.size ? t.size.split('x')[0]: 20) : 0}" 
          height="${t.imageFront ? (t.size ? t.size.split('x')[1]: 20) : 0}">`
        }
        _str += t.value
        if(t.imageBehind) {
          _str += ` <img 
          src="${t.imageBehind ? t.imageBehind : ""}" 
          class="imageBehind" 
          width="${t.imageBehind ? (t.size ? t.size.split('x')[0]: 20) : 0}" 
          height="${t.imageBehind ? (t.size ? t.size.split('x')[1]: 20) : 0}">`
        }
        _str += `</td>`
        valueArr.push(_str) 
    })
    str += `<tr>${valueArr.join("")}</tr>`
  })
  return str
}