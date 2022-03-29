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


//carousel
let path = "../../images/individ/ind",
    ext = ".jpg",
    imgArr = [];

for(let i = 1; i <= 13; i++){
        let fileNum = ('' + i).substr(-3);
        let fullPath = path + fileNum + ext;
        imgArr.push(fullPath);
    }
      let images = document.querySelector('.images');
      
for (let i=0; i<imgArr.length; i++) {
      let div = document.createElement('div');
      div.classList.add("elem-img");

      let img = document.createElement('img');
      img.setAttribute('src', imgArr[i]);
      div.appendChild(img);
      images.appendChild(div);
    }

let width = 360;
let count = 3;

let list = carousel.querySelector('.images');
let listElems = carousel.querySelectorAll('.elem-img');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  position += width * count;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};


//pop up
let elemImg = document.querySelectorAll('.elem-img');
elemImg.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('activeImg')
}))

//-------------------------


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

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const nav = document.querySelector('.nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		nav.classList.toggle('_active');
	});
}



