const currentYear = new Date().getFullYear();

let footerInfo = document.querySelectorAll(`.rights`);

footerInfo.forEach((item) => {
	item.innerHTML = `<p>Designed by Robin © ${currentYear} - All rights reserved</p>`;
});
