function changebg(){
  
    let path = "url(../images/background/";
    let ext = ".jpg)";
    let backs = [];
      
    for(let i = 1; i <= 5; i++){
      let fileNum = ('00' + i).substr(-3);
      let fullPath = path + fileNum + ext;
      backs.push(fullPath);
    }
    
    let randomImg = Math.floor(Math.random() * backs.length);
      
    document.getElementById('change-bg').style.background = (backs[randomImg]);
    document.getElementById('change-bg').style.backgroundSize = "cover";
    document.getElementById('change-bg').style.backgroundRepeat = "no-repeat";
    document.getElementById('change-bg').style.transitionDuration = "0.5s";
    document.getElementById('change-bg').style.backgroundPosition = "center";
    

}
setInterval(changebg, 5000);


const animItems = document.querySelectorAll('.anim-items');


if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('_active');
          }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  animOnScroll()
}


//---------------------------

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');

	let menuArrows = document.querySelectorAll('.menu__arrow');
	if (menuArrows.length > 0) {
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function (e) {
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}

} else {
	document.body.classList.add('_pc');
}

// ???????? ????????????
const iconMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		nav.classList.toggle('_active');
	});
}

