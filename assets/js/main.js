// main script
(function () {
  "use strict";
  
  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // autoHeight: true,
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})();

const doc = document.documentElement;
(function navToggle() {
  doc.addEventListener('click', function(event){
    const target = event.target;
    const open = 'jsopen';
    const navCloseIconClass = '.nav_close';
    // console.log(event,target);
    const navClose = elem(navCloseIconClass);
    const isNavToggle = target.matches(navCloseIconClass) || target.closest(navCloseIconClass);
    const harmburgerIcon = navClose.firstElementChild.firstElementChild;
    // console.log(harmburgerIcon);
    if(!target.closest('.nav') && elem(`.${open}`)) {
      modifyClass(doc, open);
      let navIsOpen = containsClass(doc, open);
      !navIsOpen  ? modifyClass(harmburgerIcon, 'isopen') : false;
    }
    // hyc
    if(target.closest("#diamond-select") || target.closest("#diamond-select-sider")) {
      let diamondId = target.closest("#diamond-select") ? "diamond-select" : "diamond-select-sider";
      modifyClass(document.getElementById(diamondId), 'diamond-select-open');
    } else {
      let diamondSelect = document.getElementById("diamond-select");
      let diamondSelect1 = document.getElementById("diamond-select1");
      if (diamondSelect && diamondSelect.className.includes('diamond-select-open')) {
        modifyClass(diamondSelect, 'diamond-select-open');
      }
      if (diamondSelect1 && diamondSelect1.className.includes('diamond-select-open')) {
        modifyClass(diamondSelect1, 'diamond-select-open');
      }
    }
    
    if(target.closest("#language-select")) {
      modifyClass(target.closest("#language-select"), 'language-select-open')
    } else {
      let languageSelect = document.getElementById("language-select")
      if(languageSelect && languageSelect.className.includes('language-select-open')) {
        modifyClass(languageSelect, 'language-select-open')
      }
    }
    const navItem = 'nav_item';
    const navSub = 'nav_sub';
    const showSub = 'nav_open';
    const isNavItem = target.matches(`.${navItem}`);
    const isNavItemIcon = target.closest(`.${navItem}`)

    if(isNavItem || isNavItemIcon) {
      const thisItem = isNavItem ? target : isNavItemIcon;
      const hasNext = thisItem.nextElementSibling
      const hasSubNav = hasNext ? hasNext.matches(`.${navSub}`) : null;
      if (hasSubNav) {
        event.preventDefault();
        Array.from(thisItem.parentNode.parentNode.children).forEach(function(item){
          const targetItem = item.firstElementChild;
          targetItem != thisItem ? deleteClass(targetItem, showSub) : false;
        });
        modifyClass(thisItem, showSub);
      }
    }
  });
})();
function elem(selector, parent = document){
  let elem = parent.querySelector(selector);
  return elem != false ? elem : false;
}
function modifyClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    // console.log(elClass.contains(targetClass));
    elClass.contains(targetClass) ? elClass.remove(targetClass) : elClass.add(targetClass);
  }
}
function isObj(obj) {
  return (obj && typeof obj === 'object' && obj !== null) ? true : false;
}
function containsClass(el, targetClass) {
  if (isObj(el) && targetClass && el !== document ) {
    return el.classList.contains(targetClass) ? true : false;
  }
}
function deleteClass(el, targetClass) {
  if (isObj(el) && targetClass) {
    elClass = el.classList;
    elClass.contains(targetClass) ? elClass.remove(targetClass) : false;
  }
}


// 切换语言
// setTimeout(function () {
//   // 语言切换按钮的事件监听
//   let languageBtns = document.getElementsByClassName('language-option-row');
//   if (languageBtns) {
//     for (let i = 0; i < languageBtns.length; i++) {
//       languageBtns[i].addEventListener('click', function (event) {
//         let newLanguage = '';
//         switch (event.target.innerText.trim()) {
//           case 'English':
//             newLanguage = 'en-us';
//             break;
//           case '日本語':
//             newLanguage = 'ja-jp';
//             break;
//           case '한국어':
//             newLanguage = 'ko-kr';
//             break;
//           case '中文繁':
//             newLanguage = 'zh-tw';
//             break;
//           case '中文简':
//             newLanguage = 'zh-cn';
//             break;
//         }
//         let languageGroup = ['en-us', 'ja-jp', 'ko-kr', 'zh-tw', 'zh-cn']
//         let path = window.location.pathname;
//         let segments = path.split('/');
//         let currentLanguage = '';
//         // 坑 未选语言直接切页面 segments[1]就是路径 segments[2]是空
//         if (segments[2] === '') {
//           segments[2] = segments[1]
//           segments[1] = newLanguage
//         }
//         let pageName = segments[2] || '';
//         // 坑  pageName被识别成语言了需要清空
//         if (languageGroup.includes(pageName)) {
//           pageName = ''
//         }
//         if (newLanguage !== currentLanguage) {
//           let newUrl = `/${newLanguage}/${pageName}`;
//           // 坑 默认英文语言为空
//           let en_us = newUrl.replace('/en-us', '');
//           window.location.href = en_us;
//         }
//       });
//     }
//   }
// }, 500);
