const works = document.querySelector('.works');
const worksTab= works.querySelector('.tab-items');
const cards = works.querySelector("#cards");
let fiterVal = '';
const child = worksTab.querySelectorAll('.tab-item');





for (let k=0; k < allTab.length; k++){

	let tabItem = `<li class="tab-item ${allTab[k].class}"data-val="${allTab[k].category}">${allTab[k].name}</li>`;
	worksTab.insertAdjacentHTML("beforeend", tabItem);



	let child = worksTab.querySelectorAll('.tab-item');
	
	child[k].addEventListener("click",(event)=>{
		fiterVal = child[k].getAttribute('data-val')
		cards.innerHTML = ''
		filter(fiterVal);
		if(event.target.classList.contains("tab-item") && 
			!event.target.classList.contains("active")){

			// deactive existing active 'filter-item'
			worksTab.querySelector('.active').classList.remove("active");

			// active new 'filter-item'
			event.target.classList.add("active");
		
		}
	
	})
	console.log(child[k]);


}

filter('all');





//let's create cards according to the array length
function filter(val){
	for (let i=0; i < allCards.length; i++){
		const element = allCards[i]
		if(element.category === val || val === 'all'){
			let cardItem = `<a class="works-item" href="${element.src}">
				<div class="works-body">
					<div class="img">
						<div class="img__wrapper"></div>
						<img src="./assets/${element.img}.png">
					</div>
					<div class="works-text">
						<div class="works-item-data">
							${element.data}
						</div>
						<div class="works-item-title">
							${element.name}
						</div>
					</div>
				</div>
			</a>`;
			cards.insertAdjacentHTML("beforeend", cardItem);
		}
	}
}



// const worksItem = cards.querySelectorAll('.works-item');


for(let i= 0; i < child.length; i++){
	// child[i].addEventListener("click",(event)=>{
	// 	fiterVal = child[i].getAttribute('data-val')
	// 	cards.innerHTML = ''
	// 	filter(fiterVal);
	// 	if(event.target.classList.contains("tab-item") && 
	// 		!event.target.classList.contains("active")){

	// 	// deactive existing active 'filter-item'
	// 	worksTab.querySelector('.active').classList.remove("active");

	// 	// active new 'filter-item'
	// 	event.target.classList.add("active");
		
	// }
	
	// })
}


