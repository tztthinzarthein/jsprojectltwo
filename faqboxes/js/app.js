const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);
gettoggles.forEach(gettoggle=>{
	// const.log(gettoggle);

	gettoggle.addEventListener('click',()=>{

		gettoggle.parentNode.classList.toggle('active');
	})
});