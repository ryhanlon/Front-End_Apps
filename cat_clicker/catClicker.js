

// (function() {
	// Cat bank
	const cats = [
	{name: 'Meme',
	image: 'static/images/kitten.jpg'},

	{name: 'Snooks',
	image: 'static/images/cat1.jpg'}
	];


	// const renderCats = (array) => {
	let catGallery = document.querySelector('.main-container');

	cats.forEach(cat => {

		let addCat = `<section class="cat-container">
		 <h3 class="kitty-name">${cat.name}</h3>
		 <p class="num-clicks">Number of Clicks: 0</p>
		 <img class="picture" src=${cat.image} alt="Cute kitten">
		 </section>`;

		console.log(cat.image);

		catGallery.innerHTML += addCat;
	});

	// };


// renderCats(cats);

	// Counter for counting the times of the clicks
	let counter = 0;

	const kittyCount = () => {
	const countContainer = document.querySelector('.num-clicks');
	counter += 1;

	countContainer.innerHTML = `Number of Clicks: ${counter}`;
		console.log('clicking the kittie');


};

	// eventListener for clicks
	const eventListener = () => {
	const kittyClicks = document.querySelector('.cat-container');

	kittyClicks.addEventListener('click', kittyCount);

};


eventListener();


// })();

