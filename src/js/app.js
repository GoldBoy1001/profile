
import * as webpFn from "./modules/fn.js";

webpFn.isWebp();

// =========================

const menu = document.querySelector('.detail__hover');
const menuList = document.querySelector('.nav-list')

menu.addEventListener('click', (e) =>{
	if(e.target.closest('.detail__hover')) {
		menuList.classList.toggle('nav-list-active')
	}
})