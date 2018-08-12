// Cat bank
const cats = [
	{
		name: 'Meme',
		clicks: 0,
		image: 'static/images/Meme.jpg',
		copyright: 'photo by Sonoraxus'
	},
	{
		name: 'Snooks',
		clicks: 0,
		image: 'static/images/Snooks.jpg',
		copyright: 'photo by Paul Reynolds'
	},
	{
		name: 'Strings',
		clicks: 0,
		image: 'static/images/Strings.jpg',
		copyright: 'photo by HolgersFotografie'
	},
	{
		name: 'Arbolito',
		clicks: 0,
		image: 'static/images/Arbolito.jpg',
		copyright: 'photo by Kessa'
	},
	{
		name: 'Lambda',
		clicks: 0,
		image: 'static/images/Lambda.jpg',
		copyright: 'photo by Max Pixel'
	},

];


// Counter for counting the times of the clicks
let counter = 0;


// const kittyCount = () => {
// 	const countContainer = document.querySelector('.cat-container img-holder img');
// 	let kittyPets = cats.clicks;
//
// 	 kittyPets += 1;
//
// 	countContainer.innerHTML = `Number of Clicks: ${counter}`;
// 	console.log('clicking the kittie' + kittyPets);
// };


// Click the kittie
// const clickKitty = (event) => {

	// if (event.target === event.currentTarget) {
	// 	let clickedItem = event.target.id;
	// 	console.log("hey" + clickedItem);
	// 	kittyCount(clickedItem);
	// }
	// event.stopPropagation();
// };


const kittyChoice = (event) => {
	// add picture to feature space to pet
	let pictureName = event.target.id;
	console.log(pictureName);
	kittyFeature(pictureName);
};

// eventListener for clicks
const eventListener = () => {
	// const kittyClicks = document.querySelector('.thumbnail-container cat-container button');

	$('button').on('click', kittyChoice);

};


// const eventListener2 = () => {
// 	const kittyClicks = document.querySelector('.img-holder');
//
// 	kittyClicks.addEventListener('click', kittyCount);
//
// };

const kittyFeature = (pictureName) => {
	let catFeature = document.querySelector('.main-container');
	$(catFeature).empty();

		let addFeatureCat = `<section class="cat-container">
			<h3 class="kitty-name thum-design">${pictureName}</h3>
			 <p class="num-clicks thum-design ${pictureName}">pets</p>
			 <div class="img-holder">
		 	<img id=${pictureName} class="picture" src='static/images/${pictureName}.jpg' alt="Cute kitten" />
		 	</div>
		 	</section>`;

		catFeature.innerHTML += addFeatureCat;
	// eventListener2();

};


const kittyThumbnails = (array) => {
let catGallery = document.querySelector('.thumbnail-container');

	cats.forEach((cat, index) => {
		let addCat = `<section class="cat-container">
		 <h3 class="kitty-name thum-design">${cat.name}</h3>
		 <button id=${cat.name} class="thum-design ${cat.name}">Click to pet me!</button>
		 <div class="img-holder">
		 <img id=${index} class="picture" src=${cat.image} alt="Cute kitten">
		 </div>
		 </section>`;

		catGallery.innerHTML += addCat;
	});

	eventListener();

};


kittyThumbnails(cats);





//
// const kittyThumbnails = (array) => {
// let catGallery = document.querySelector('.thumbnail-container');
//
// 	cats.forEach(cat => {
// 		let addCat = `<section class="cat-container">
// 		 <h3 class="kitty-name">${cat.name}</h3>
// 		 <p class="num-clicks ${cat.name}">Pet Me: 0</p>
// 		 <div class="img-holder">
// 		 <img id=${cat.name} class="picture" src=${cat.image} alt="Cute kitten">
// 		 </div>
// 		 </section>`;
//
// 		console.log(cat.image);
//
// 		catGallery.innerHTML += addCat;
// 	});


