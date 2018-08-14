/* ========= Model ======== */
const data = {
	featuredKitty: null,
	cats: [
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
		}],

};


/* ========= Octopus ======== */

const octopus = {

};


// Counting the number of pets and storing them in Model
const kittyCount = () => {
	const countContainer = document.querySelector('.seeMe');
	let kitty = data.featuredKitty;
	kitty.clicks += 1;

	countContainer.innerHTML = `${kitty.clicks} pets`;
		// // $(countContainer).append(`<span>${cat["clicks"]} Pets</span>`);
		console.log(`clicking the ${kitty.name} ${kitty.clicks}`);

};


// eventListener for clicks
const eventListener2 = () => {
	$('.img-holder').on('click', kittyCount);
};


// Viewing the selected kitty, accepting kittyPosition for accessing the selected kitty data
const kittyFeature = (kittyPosition) => {
	let catFeature = document.querySelector('.main-container');
	$(catFeature).empty();

	// Get data
	let cats = data.cats;

	// Add selected kitty's data to featuredKitty
	data.featuredKitty = cats[kittyPosition];
	let featuredKitty = data.featuredKitty;

	let addFeatureCat = `<section class="feature-container">
							<h3 class="kitty-name thum-design">${featuredKitty.name}</h3>
							<p class="num-clicks seeMe thum-design">${featuredKitty.clicks} pets</p>
							<div class="img-holder">
								<img id=${featuredKitty.name} class="feature-img" src='${featuredKitty.image}' alt="Cute kitten" />
							</div>
						</section>`;
			catFeature.innerHTML += addFeatureCat;

			eventListener2();
};


// Capturing the event for the kitty clicked
const kittyChoice = (event) => {
	// Capturing id of clicked event
	kittyPosition = event.target.id;
	// console.log(`clicked kitty id; ${kittyPosition}`);

	kittyFeature(kittyPosition);
};


// eventListener for choice
const eventListener = () => {
	$('button').on('click', kittyChoice);
};


// View the thumbnails
const kittyThumbnails = () => {
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




