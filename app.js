const restaurants = [
	{
		restaurant: 'Big Hole BBQ',
		description: 'Place a takeout orders by phone.',
		hours: '11:30 a.m. and 8 p.m.',
		'phone-number': '(307) 264-1996',
		'button-text': 'Order By Phone',
		'button-url': 'tel:(307) 264-1996',
		'menu-url': 'https://www.jacksonholebbq.com/menu'
	},
	{
		restaurant: 'Bin22',
		description:
			'Bottle shop/specialty grocer is open, offering curbside pick up and home delivery',
		hours: '',
		'phone-number': '',
		'button-text': 'Online Menu',
		'button-url': 'https://bin-22-wine.myshopify.com/',
		'menu-url': ''
	},
	{
		restaurant: 'Bubba’s Bar-B-Que',
		description:
			"Bubba's will be offering to-go orders only at this time. We will be open from 7AM - 8PM daily. Please call your to-go order in and let us know when you arrive. We will bring it out to you! We encourage people to leave a 20% tip for our staff during this time as many of them are out of work.",
		hours: '7 a.m.-8 p.m. daily',
		'phone-number': '(307) 733-2288',
		'button-text': 'Order By Phone',
		'button-url': 'tel:(307) 733-2288',
		'menu-url': 'https://bubbasjh.com/'
	},
	{
		restaurant: 'Cafe Genevieve',
		description:
			'Special family-style dinners will be added to the menu daily until sold out.',
		hours: '10:00 a.m. - 6:00 p.m.',
		'phone-number': '(307) 732-1910',
		'button-text': 'Order By Phone',
		'button-url': 'tel:(307) 732-1910',
		'menu-url': 'https://genevievejh.com/'
	},
	{
		restaurant: 'Calico',
		description: 'Call for takeout.',
		hours: '5:00 - 9:00 p.m.',
		'phone-number': '(307) 200-9631',
		'button-text': 'Order By Phone',
		'button-url': 'tel:307-200-9631',
		'menu-url': 'http://www.calicorestaurant.com/menu'
	},
	{
		restaurant: 'Hatch',
		description:
			'Please note that the takeout menu is slightly reduced. Breakfast and lunch items are available from 11 a.m.-4 p.m., with dinner available from 4-8:30 p.m.',
		hours: '11 a.m. - 8:30 p.m.',
		'phone-number': '(307) 203-2780',
		'button-text': 'Online Menu',
		'button-url': 'https://direct.chownow.com/order/17777/locations/25465',
		'menu-url': ''
	},
	{
		restaurant: 'Picas',
		description: 'Offering bulk orders and takeout.',
		hours: '11:00 a.m.  - 9:00 p.m.',
		'phone-number': '(307) 734-4457',
		'button-text': 'Online Menu',
		'button-url':
			'https://app.upserve.com/s/picas-mexican-taqueria-jackson-jackson',
		'menu-url': 'https://www.picastaqueria.com/menus/'
	},
	{
		restaurant: 'Hand Fire Pizza',
		description: 'Curbside pickup or delivery.',
		hours: '5:00 - 9:00 p.m.',
		'phone-number': '(307) 733-7199',
		'button-text': 'Online Menu',
		'button-url': 'https://ordering.orders2.me/menu/handfirepizza',
		'menu-url': ''
	},
	{
		restaurant: 'Cutty’s',
		description: 'Order to-go food with a credit card',
		hours: '11:30 a.m. - 8:00 p.m.',
		'phone-number': '(307) 201-1079',
		'button-text': 'Online Menu',
		'button-url': 'https://direct.chownow.com/order/13069/locations/18300',
		'menu-url': ''
	},
	{
		restaurant: 'Teton Tiger',
		description: 'Call ahead for curbside pickup.',
		hours: '',
		'phone-number': '(307) 733-4111',
		'button-text': 'Order By Phone',
		'button-url': 'tel:(307) 733-4111',
		'menu-url': 'http://www.tetontiger.com/'
	},
	{
		restaurant: 'Cowboy Coffee',
		description: 'Order online for takeout or delivery.',
		hours: '8AM - 3PM.  || We are closed on Sunday.',
		'phone-number': '(307) 733-7392',
		'button-text': 'Online Menu',
		'button-url':
			'https://us.orderspoon.com/cowboycoffee?fbclid=IwAR0-O6U-NMAeKquC8wMB92M-JVN5wdr2vQSz9SwJlGb-ErcHcccWVrxNXvw',
		'menu-url': ''
	}
];

const btnAll = document.getElementById('all-filter');
const btnDelivery = document.getElementById('delivery');
const btnTakeout = document.getElementById('takeout');
let el = document.querySelectorAll('.card');
// console.log(el);

btnAll.onclick = function() {
	let i;
	for (i = 0; i > el.length; i++) {
		el[i].classList.toggle('hidden');
		console.log(el);
	}
};

btnDelivery.onclick = function() {};

btnTakeout.onclick = function() {};

// function toggler() {
// 	console.log(el);
// 	el.onclick = function() {
// 		console.log('clicked');
// 		el.classList.toggle('hidden');
// 	};
// }

// function cardBuilder() {
// 	let data = restaurants;
// 	let card = document.getElementById('card');
// 	let name = document.querySelector('h2');
// 	// let content = '';
// 	// for (i = 0; i < data.length; i++) {
// 	// 	content += `<h2>` + data[i].restaurant`</h2>`();
// 	// }
// 	console.log(name);
// 	console.log(card);
// 	document.getElementById('card2').append = content;
// }
// cardBuilder();

// function hideAndSHow() {
// 	let el = document.getElementsByClassName('card');
// 	console.log(el);
// 	// let open = document.('open');
// 	console.log(open);
// 	// console.log(el.getAttribute('data-open'));
// 	// let el = document.querySelectorAll('card');
// 	// let hide = document.querySelectorAll('data-open');
// 	// console.log(el);
// 	// console.log(hide);
// }
// hideAndSHow();

// el.onclick = function() {
// 	console.log('clicked');
// 	tog.classList.toggle('open');
// };

// let out = '';
// 	var i;
// 	for (i = 0; i < data.length; i++) {
// 		out += '<h2>' + data[i].url + '</h2>' + arr[i].display + '</a><br>';
// 	}
// 	document.getElementById('id01').innerHTML = out;

// let name = '';
// 	let i;
// 	for (i = 0; i < data.length; i++) {
// 		name += `<h2>` + data[i].restaurant`</h2>`;
// 		console.log(name);
// 	}
