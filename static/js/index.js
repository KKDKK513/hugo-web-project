let cardTitles
let interval
window.onload = function() {
  alertBtnClick()
  checkDiamondStatus()
  diamondRowClick()
  let url = window.location.pathname

  if(url === '/' || url === '/ja-jp/' || url === '/ko-kr/' || url === '/zh-tw/' || url === '/zh-cn/') {
    cardTitles = document.getElementsByClassName('card-title')
    // console.log(cardTitles, 'cardTitles');
    if(cardTitles) {
      for (let i = 0; i < cardTitles.length; i+=2) {
        let height1 = window.getComputedStyle(cardTitles[i]).height
        let height2 = window.getComputedStyle(cardTitles[i+1]).height
        console.log(parseFloat(height1), parseFloat(height2));
        if(parseFloat(height1) != parseFloat(height2)) {
          if(parseFloat(height1) > parseFloat(height2)) {
            cardTitles[i+1].style.height = height1
          }
          if(parseFloat(height1) < parseFloat(height2)) {
            cardTitles[i].style.height = height2
          }
        }
      }
    }
  }
  
  if(url.includes('introduction')) {
    // let circleData = 
    let annularPieData = []
    let total = 0
    let styleStr = []
    let annularPieDom = document.getElementsByClassName('annular-pie-item')
    console.log(annularPieDom, 'annular-pie-item');
    for(let i = 0; i < annularPieDom.length; i++) {
      total += Number(annularPieDom[i].getAttribute('value').replace(/,/g,''))
      console.log(annularPieDom[i].getAttribute('value'));
      annularPieData.push({ value: Number(annularPieDom[i].getAttribute('value').replace(/,/g,'')), color: annularPieDom[i].getAttribute('color') , percentage: 0, endCount: 0 })
    }
    annularPieData.forEach((t, index) => {
      console.log(t,index);
      t.percentage = (t.value / total)*100
      t.endCount = index == 0 ? t.percentage : annularPieData[index-1].endCount + t.percentage
      styleStr.push(`${t.color} ${index==0 ? 0 : annularPieData[index-1].endCount}% ${t.endCount}%`)
    })
    console.log(styleStr, `conic-gradient(${styleStr.join(',')})`);
    document.getElementById('circle-echart').style.background = `conic-gradient(${styleStr.join(',')})`
    // document.getElementById('circle-echart-text1').innerText = total
    // document.getElementById('circle-echart-text1').innerText = "200,000,000"
    function formatTotal(val) {
      
    }
    // console.log(annularPieData,total, 'total');
  }

  if(url.includes('subscription')) {
    // let circleData = 
    let annularPieData = []
    let total = 0
    let styleStr = []
    let annularPieDom = document.getElementsByClassName('subscription-annular-pie-item')
    // console.log(annularPieDom, 'annular-pie-item');
    for(let i = 0; i < annularPieDom.length; i++) {
      total += Number(annularPieDom[i].getAttribute('value').replace(/,/g,''))
      console.log(annularPieDom[i].getAttribute('value'));
      annularPieData.push({ value: Number(annularPieDom[i].getAttribute('value').replace(/,/g,'')), color: annularPieDom[i].getAttribute('color') , percentage: 0, endCount: 0 })
    }
    annularPieData.forEach((t, index) => {
      console.log(t,index);
      t.percentage = (t.value / total)*100
      t.endCount = index == 0 ? t.percentage : annularPieData[index-1].endCount + t.percentage
      styleStr.push(`${t.color} ${index==0 ? 0 : annularPieData[index-1].endCount}% ${t.endCount}%`)
    })
    console.log(styleStr, `conic-gradient(${styleStr.join(',')})`);
    document.getElementById('subscription-echart').style.background = `conic-gradient(${styleStr.join(',')})`
    // console.log(annularPieData,total, 'total');
  }

  // modal
  let validate = "2024"
  let validateTime = 60
  interval = null
  $('#input-innerBtn')[0].addEventListener('click', function() {
    if(!$('.email_input')[0].value) {
      // alert('请输入邮箱地址')
      $('.input-btn').next()[0].innerText = "This is an empty message."
      $('.email_input')[0].classList.add('validate-error')
      $('.input-btn').next()[0].style.opacity = "1"
    } else if(!validateEmail($('.email_input')[0].value)) {
      // alert('请输入正确邮箱地址')
      $('.input-btn').next()[0].innerText = "This is an error message."
      $('.email_input')[0].classList.add('validate-error')
      $('.input-btn').next()[0].style.opacity = "1"
    } else {
      console.log(interval);
      if(interval) {
        
      } else {
        $('.email_input')[0].classList.remove('validate-error')
        $('.input-btn').next()[0].style.opacity = "0"
        $('.input-innerBtn')[0].innerHTML = `Resend after ${validateTime}`
        sessionStorage.setItem("validateTime",validateTime)
        $('.input-innerBtn')[0].classList.add('dark-input-innerBtn')
        validateCodeTime()
        interval = setInterval(validateCodeTime, 1000)
        $('.validate_code')[0].focus()
      }
    }
  })
  $('#modal-submit')[0].addEventListener('click', function(e) {
    if($(".validate_code")[0].value == validate){
      $('.validate_code')[0].classList.remove('validate-error')
      $('.validate_code').next()[0].style.opacity = "0"
      setTimeout(()=> {
        alert('submit')
      },0)
    } else {
      $('.validate_code')[0].classList.add('validate-error')
      $('.validate_code').next()[0].style.opacity = "1"
      e.preventDefault()
    }
  })
  $('#myModal-1').on('shown.bs.modal', function () {
    // console.log($('header')[0].style);
    $('header')[0].style.filter = "blur(5px)"
    $('main')[0].style.filter = "blur(5px)"
    $('footer')[0].style.filter = "blur(5px)"
  })
  $('#myModal-1').on('hidden.bs.modal', function () {
    // console.log($('header')[0].style);
    $('header')[0].style.filter = "blur(0px)"
    $('main')[0].style.filter = "blur(0px)"
    $('footer')[0].style.filter = "blur(0px)"
  })
  $('#alert-modal').on('shown.bs.modal', function () {
    // console.log($('header')[0].style);
    $('header')[0].style.filter = "blur(5px)"
    $('main')[0].style.filter = "blur(5px)"
    $('footer')[0].style.filter = "blur(5px)"
  })
  $('#alert-modal').on('hidden.bs.modal', function () {
    // console.log($('header')[0].style);
    $('header')[0].style.filter = "blur(0px)"
    $('main')[0].style.filter = "blur(0px)"
    $('footer')[0].style.filter = "blur(0px)"
  })
  // $("#alert-modal .header-text")[0].innerText = "1111" //修改header内容
  //修改contet内容
  setTimeout(()=> {
    // $("#alert-modal .content")[0].innerHTML = window.translations[1001]
    // console.log(window.translations);
    alert(window.translations["home.story.theme_web.btn_learnmore1005"]) 
  }, 2000)
  let dashboardHeader = document.getElementById('dashboard-header')
  if(dashboardHeader) {
    dashboardHeader.addEventListener('click', function(){
      // console.log(1111, dashboardHeader.classList);
      if(dashboardHeader.classList.contains('slide-left')) {
        dashboardHeader.classList.replace('slide-left', 'slide-right')
      } else {
        dashboardHeader.classList.replace('slide-right', 'slide-left')
      }
    })
  }
}
function alertBtnClick() {
  let btn = document.getElementsByClassName('alert-btn')
  btn[0].addEventListener('click', function(event) {
    // console.log(event, btn[0], btn[0].innerHTML);
    // alert(`我是${btn[0].innerText}按钮`)
    alert(JSON.parse(sessionStorage.getItem('diamondValue')).text)
  })
}
function checkDiamondStatus() {
  let diamondValue = ""
  let diamondRows = document.getElementsByClassName('diamond-option-row')
  if(!sessionStorage.getItem('diamondValue')) {
    let diamondValue = {
      text: diamondRows[0].innerText,
      icon: '/'+ diamondRows[0].attributes.icon.nodeValue
    }
    sessionStorage.setItem('diamondValue', JSON.stringify(diamondValue))
    diamondValue = diamondRows[0].innerText
    $('.selectIcon2').attr("src", '/'+ diamondRows[0].attributes.icon.nodeValue)
  } else {
    diamondValue = JSON.parse(sessionStorage.getItem('diamondValue')).text
    $('.selectIcon2').attr("src", JSON.parse(sessionStorage.getItem('diamondValue')).icon)
    $('.diamond-select1-text').text(diamondValue)
  }
  for(let i = 0; i < diamondRows.length; i++) {
    if(diamondRows[i].innerText == diamondValue) {
      diamondRows[i].classList.add("diamond-row-select")
    } else {
      diamondRows[i].classList.remove("diamond-row-select")
    }
  }
}
function diamondRowClick() {
  let diamondRows = document.getElementsByClassName('diamond-option-row')
  for(let i = 0; i < diamondRows.length; i++) {
    diamondRows[i].addEventListener('click', function() {
      // console.log(diamondRows[i].attributes,diamondRows[i].attributes.icon.nodeValue);
      let selectIcon2 = $('.selectIcon2')
      selectIcon2.attr("src", '/'+ diamondRows[i].attributes.icon.nodeValue)
      let diamondValue = {
        text: diamondRows[i].innerText,
        icon: '/'+ diamondRows[i].attributes.icon.nodeValue
      }
      sessionStorage.setItem('diamondValue', JSON.stringify(diamondValue))
      checkDiamondStatus()
    })
  }
}
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
function validateCodeTime() {
  console.log('执行');
  let _validateTime = sessionStorage.getItem("validateTime")
  if(_validateTime == 0) {
    sessionStorage.setItem("validateTime",60)
    $('.input-innerBtn')[0].classList.remove('dark-input-innerBtn')
    $('.input-innerBtn')[0].innerHTML = $('.input-innerBtn')[0].attributes.content.nodeValue
    clearInterval(interval)
    interval = null
  } else {
    $('.input-innerBtn')[0].innerHTML = `Resend after ${_validateTime}`
    sessionStorage.setItem("validateTime",_validateTime - 1)
  }
}