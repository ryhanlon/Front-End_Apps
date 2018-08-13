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
// let counter = 0;


const kittyCount = (event) => {


	let catName = event.target.id;

	const countContainer = document.querySelector('.num-clicks');
	$(countContainer).empty();

	cats.forEach(cat => {
			$(countContainer).empty();

		if (catName === cat.name)
			cat["clicks"] += 1;

		countContainer.innerHTML = `${cat.clicks} Pets`;
		// $('.num-clicks').append(`<span>${cat["clicks"]} Pets</span>`);
		console.log(`clicking the ${cat.name} ${cat.clicks}`);

	});

};


const kittyChoice = (event) => {
	// add picture to feature space to pet
	let pictureName = event.target.id;
	kittyFeature(pictureName);
};

// eventListener for choice
const eventListener = () => {
	// const kittyClicks = document.querySelector('.thumbnail-container cat-container button');

	$('button').on('click', kittyChoice);

};

// eventListener for clicks
const eventListener2 = () => {

	$('.img-holder').on('click', kittyCount);

};

const kittyFeature = (pictureName) => {
	let catFeature = document.querySelector('.main-container');
	$(catFeature).empty();

		let addFeatureCat = `<section class="feature-container">
			<h3 class="kitty-name thum-design">${pictureName}</h3>
			 <p class="num-clicks thum-design ${pictureName}"> 0 pets</p>
			 <div class="img-holder">
		 	<img id=${pictureName} class="feature-img" src='static/images/${pictureName}.jpg' alt="Cute kitten" />
		 	</div>
		 	</section>`;

		catFeature.innerHTML += addFeatureCat;
		eventListener2();

};


const kittyThumbnails = (array) => {
let catGallery = document.querySelector('.thumbnail-container');

	cats.forEach((cat, index) => {
		let addCat = `<section class="cat-container ${cat.name}">
		 <h3 class="kitty-name thum-design">${cat.name}</h3>
		 <button id=${cat.name} class="thum-design ${cat.name}">Pet me!</button>
		 <div class="img-holder">
		 <img id=${index} class="picture" src=${cat.image} alt="Cute kitten">
		 </div>
		 </section>`;

		catGallery.innerHTML += addCat;
	});

	eventListener();

};


kittyThumbnails(cats);


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


