/* ========= Model ======== */
const data = {
	featuredKitty: null,
	cats: [
		{
			name: 'Meme',
			clicks: 1,
			image: 'static/images/Meme.jpg',
			copyright: 'photo by Sonoraxus'
		},
		{
			name: 'Snooks',
			clicks: 1,
			image: 'static/images/Snooks.jpg',
			copyright: 'photo by Paul Reynolds'
		},
		{
			name: 'Strings',
			clicks: 1,
			image: 'static/images/Strings.jpg',
			copyright: 'photo by HolgersFotografie'
		},
		{
			name: 'Arbolito',
			clicks: 1,
			image: 'static/images/Arbolito.jpg',
			copyright: 'photo by Kessa'
		},
		{
			name: 'Lambda',
			clicks: 1,
			image: 'static/images/Lambda.jpg',
			copyright: 'photo by Max Pixel'
		}],

};


/* ========= Octopus ======== */

const octopus = {

};


// Counting the number of pets
const kittyCount = (featuredKitty, kittyPosition) => {
	const countContainer = document.querySelector('.seeMe');
	let kitty = data.featuredKitty;

	kitty.clicks += 1;
		countContainer.innerHTML = `${kitty.clicks} Pets`;
		// // $(countContainer).append(`<span>${cat["clicks"]} Pets</span>`);
		console.log(`clicking the ${kitty.name} ${kitty.clicks}`);

};


// eventListener for clicks
const eventListener2 = () => {
	$('.img-holder').on('click', kittyCount);
};


const kittyFeature = (kittyPosition) => {
	let catFeature = document.querySelector('.main-container');
	$(catFeature).empty();

	// Get data
	let cats = data.cats;
	// console.log(`kjhkjh ${kittyPosition}`);
	// console.log(cats[kittyPosition]);

	// Add selected kitty's data to featuredKitty
	data.featuredKitty = cats[kittyPosition];
	let featuredKitty = data.featuredKitty;
	// let meow = cats[kittyPosition];
	// console.log(meow);


	let addFeatureCat = `<section class="feature-container">
							<h3 class="kitty-name thum-design">${featuredKitty.name}</h3>
							<p class="num-clicks seeMe thum-design ${featuredKitty.clicks}"> 0 pets</p>
							<div class="img-holder">
								<img id=${featuredKitty.name} class="feature-img" src='${featuredKitty.image}' alt="Cute kitten" />
							</div>
						</section>`;
			catFeature.innerHTML += addFeatureCat;

			eventListener2(featuredKitty, kittyPosition);
};

const kittyChoice = (event) => {
	// add picture to feature space to pet
	kittyPosition = event.target.id;
	// console.log(`clicked kitty id; ${kittyPosition}`);

	kittyFeature(kittyPosition);
};


// eventListener for choice
const eventListener = () => {
	$('button').on('click', kittyChoice);
};


const kittyThumbnails = (data) => {
	// Target for the thumbnails
	const catGalleryThumbnails = document.querySelector('.thumbnail-container');
	// Target for kitty feature
	const catFeature = document.querySelector('.main-container');
	// All of the cat's data
	let cats = data.cats;


	for (let i = 0; i < cats.length; i++) {

			let cat = cats[i];
			console.log('cat data ' + cat.name);

		//   html cat for the thumbnail
		let addCat = `<section class="cat-container ${cat.name}">
					 <h3 class="kitty-name thum-design">${cat.name}</h3>
					 <button id=${i} class="thum-design ${cat.name}">Pet me!</button>
					 <div class="img-holder">
					 <img id="cat-feature" class="picture" src=${cat.image} alt="Cute kitten">
					 </div>
					 </section>`;
	// add each cat thumbnail to the DOM
		catGalleryThumbnails.innerHTML += addCat;
	}
	eventListener();
};

/* ========= View ======== */

const catThumbnailView = {


};


const catFeatureView = {


};


kittyThumbnails(data);


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


