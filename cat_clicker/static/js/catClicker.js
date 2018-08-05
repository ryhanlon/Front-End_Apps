

(function() {
	let counter = 0;


	const kittyCount = () => {
	const countContainer = document.querySelector('.num-clicks');
	counter += 1;

	countContainer.innerHTML = `Number of Clicks: ${counter}`;
		console.log('clicking the kittie');


};


	const eventListener = () => {
	const kittyClicks = document.querySelector('#picture');

	kittyClicks.addEventListener('click', kittyCount);

};


eventListener();


})();

