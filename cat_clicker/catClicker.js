// Cat bank
const cats = [
	{
		name: 'Meme',
		clicks: 0,
		image: 'static/images/kitty1.jpg',
		copyright: 'photo by Sonoraxus'
	},
	{
		name: 'Snooks',
		clicks: 0,
		image: 'static/images/kitty2.jpg',
		copyright: 'photo by Paul Reynolds'
	},
	{
		name: 'Strings',
		clicks: 0,
		image: 'static/images/kitty3.jpg',
		copyright: 'photo by HolgersFotografie'
	},
	{
		name: 'Arbolito',
		clicks: 0,
		image: 'static/images/kitty4.jpg',
		copyright: 'photo by Kessa'
	},
	{
		name: 'Cansada',
		clicks: 0,
		image: 'static/images/kitty5.jpg',
		copyright: 'photo by Max Pixel'
	},

];


// Counter for counting the times of the clicks
let counter = 0;


const kittyCount = () => {
	const countContainer = document.querySelector('.num-clicks');
	counter += 1;

	countContainer.innerHTML = `Number of Clicks: ${counter}`;
	console.log('clicking the kittie');
};


// Click the kittie
// const clickKitty = (event) => {

	// if (event.target === event.currentTarget) {
	// 	let clickedItem = event.target.id;
	// 	console.log("hey" + clickedItem);
	// 	kittyCount(clickedItem);
	// }
	// event.stopPropagation();
// };


// eventListener for clicks
const eventListener = () => {
	const kittyClicks = document.querySelector('.img-holder');

	kittyClicks.addEventListener('click', kittyCount);

};


const renderCats = (array) => {
let catGallery = document.querySelector('.main-container');

	cats.forEach(cat => {
		let addCat = `<section class="cat-container">
		 <h3 class="kitty-name">${cat.name}</h3>
		 <p class="num-clicks ${cat.name}">Number of Clicks: 0</p>
		 <div class="img-holder">
		 <img id=${cat.name} class="picture" src=${cat.image} alt="Cute kitten">
		 </div>
		 </section>`;

		console.log(cat.image);

		catGallery.innerHTML += addCat;
	});

	eventListener();

};


renderCats(cats);








