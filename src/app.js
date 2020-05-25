// import restaurants from './restaurants.js';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants';
import Records from './components/GetRecords';

console.log('Connected');

let records = Restaurants();
let restaurants;
hasTakeout(records);

function hasTakeout(arr) {
	restaurants = arr.filter((loc) => loc.takeout === true);
	console.log('take out Ran');
}

function allRestaurants() {
	restaurants = records;
}

function clear() {
	restaurants = [];
}

//Load Filters
filters.innerHTML = Filters();

// const restaurantList = document.getElementById('resturantList');
// console.log('resturantList', resturantList);

function hasMenuButton(obj) {
	if (obj.menuUrl !== '') {
		return `<button class='menu'>
		<a href='${obj.menuUrl}' target='_blank'>
			Menu
		</a>
	</button>`;
	} else {
		return ``;
	}
}

function loadCards() {
	for (let i = 0; i < restaurants.length; i++) {
		let df = document.createDocumentFragment();
		let div = document.createElement('div');
		div.className = 'card';
		div.id = 'card';
		let content = `
			<h2>${restaurants[i].restaurant}</h2>
			<p class="phone">
			<strong>Phone:
			</strong>${restaurants[i].phone}</p>
			<p class="hours">
				<strong>Hours:</strong>
				${restaurants[i].hours}</p>
			<p class="description">
				${restaurants[i].description}
			</p>
			<div class="actions">
				<button class="order">
					<a href="${restaurants[i].buttonUrl}">
					${restaurants[i].buttonText}
					</a>
				</button>
				${hasMenuButton(restaurants[i])}
			</div>
		`;
		df.appendChild(div);
		div.innerHTML = content;
		resturantList.appendChild(df);
	}
}

const btnAll = document.getElementById('allOptions');
const btnOnlineOrdering = document.getElementById('onlineOrdering');
const btnTakeout = document.getElementById('takeout');

btnAll.addEventListener('click', () => loadCards());

btnOnlineOrdering.addEventListener('click', () => {
	hasTakeout(restaurants);
	loadCards();
});

btnTakeout.addEventListener('click', function () {
	clear();
	loadCards();
});

// btnTakeout.onclick = function () {
// 	alert("Get's Takeout Only Options");
// };
