const drawerBtnElament = document.getElementById('drawer-btn');
const mobileDrawerElement = document.getElementById('mobile-drawer');

function toggleDrawer() {
	mobileDrawerElement.classList.toggle('open');
}

drawerBtnElament.addEventListener('click', toggleDrawer);