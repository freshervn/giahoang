
$('.related-products-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots:false,
	responsive:{
		0:{
			items:1
		},
		586:{
			items:2
		},
		768:{
			items:3
		},
		992:{
			items:4
		}
	}
})
$('.related-news-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	dots:true,
	responsive:{
		0:{
			items:1
		},
		586:{
			items:2
		},
		768:{
			items:3
		},
		992:{
			items:3
		}
	}
})

// document.addEventListener("load",responsive());

// function responsive() {
	
// 	let q= document.matchMedia("(max-with:576px)");
// alert("hi");	
// 	if(query.matches)
// 	{

// 		// $('.related-news-carousel').owlCarousel({
// 		// 	loop:true,
// 		// 	margin:10,
// 		// 	nav:false,
// 		// 	dots:false,
// 		// 	responsive:{
// 		// 		0:{
// 		// 			items:1
// 		// 		},
// 		// 		586:{
// 		// 			items:2
// 		// 		},
// 		// 		768:{
// 		// 			items:3
// 		// 		},
// 		// 		992:{
// 		// 			items:3
// 		// 		}
// 		// 	}
// 		// })		
// 	}		
// }
