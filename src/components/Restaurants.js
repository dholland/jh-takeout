const Restaurants = () => {
	const restaurants = [
		{
			restaurant: 'Big Hole BBQ',
			description: 'Place a takeout orders by phone.',
			hours: '11:30 a.m. and 8 p.m.',
			phone: '(307) 264-1996',
			buttonText: 'Order By Phone',
			buttonUrl: 'tel:(307) 264-1996',
			menuUrl: 'https://www.jacksonholebbq.com/menu',
			takeout: true,
		},
		{
			restaurant: 'Bin22',
			description:
				'Bottle shop/specialty grocer is open, offering curbside pick up and home delivery',
			hours: '',
			phone: '',
			buttonText: 'Online Menu',
			buttonUrl: 'https://bin-22-wine.myshopify.com/',
			menuUrl: '',
			delivery: false,
			takeout: true,
		},
		{
			restaurant: 'Bubba’s Bar-B-Que',
			description:
				"Bubba's will be offering to-go orders only at this time. We will be open from 7AM - 8PM daily. Please call your to-go order in and let us know when you arrive. We will bring it out to you! We encourage people to leave a 20% tip for our staff during this time as many of them are out of work.",
			hours: '7 a.m.-8 p.m. daily',
			phone: '(307) 733-2288',
			buttonText: 'Order By Phone',
			buttonUrl: 'tel:(307) 733-2288',
			menuUrl: 'https://bubbasjh.com/',
			takeout: true,
		},
		{
			restaurant: 'Cafe Genevieve',
			description:
				'Special family-style dinners will be added to the menu daily until sold out.',
			hours: '10:00 a.m. - 6:00 p.m.',
			phone: '(307) 732-1910',
			buttonText: 'Order By Phone',
			buttonUrl: 'tel:(307) 732-1910',
			menuUrl: 'https://genevievejh.com/',
			takeout: true,
		},
		{
			restaurant: 'Calico',
			description: 'Call for takeout.',
			hours: '5:00 - 9:00 p.m.',
			phone: '(307) 200-9631',
			buttonText: 'Order By Phone',
			buttonUrl: 'tel:307-200-9631',
			menuUrl: 'http://www.calicorestaurant.com/menu',
			takeout: true,
		},
		{
			restaurant: 'Hatch',
			description:
				'Please note that the takeout menu is slightly reduced. Breakfast and lunch items are available from 11 a.m.-4 p.m., with dinner available from 4-8:30 p.m.',
			hours: '11 a.m. - 8:30 p.m.',
			phone: '(307) 203-2780',
			buttonText: 'Online Menu',
			buttonUrl: 'https://direct.chownow.com/order/17777/locations/25465',
			menuUrl: '',
		},
		{
			restaurant: 'Picas',
			description: 'Offering bulk orders and takeout.',
			hours: '11:00 a.m.  - 9:00 p.m.',
			phone: '(307) 734-4457',
			buttonText: 'Online Menu',
			buttonUrl:
				'https://app.upserve.com/s/picas-mexican-taqueria-jackson-jackson',
			menuUrl: 'https://www.picastaqueria.com/menus/',
		},
		{
			restaurant: 'Hand Fire Pizza',
			description: 'Curbside pickup or delivery.',
			hours: '5:00 - 9:00 p.m.',
			phone: '(307) 733-7199',
			buttonText: 'Online Menu',
			buttonUrl: 'https://ordering.orders2.me/menu/handfirepizza',
			menuUrl: '',
		},
		{
			restaurant: 'Cutty’s',
			description: 'Order to-go food with a credit card',
			hours: '11:30 a.m. - 8:00 p.m.',
			phone: '(307) 201-1079',
			buttonText: 'Online Menu',
			buttonUrl: 'https://direct.chownow.com/order/13069/locations/18300',
			menuUrl: '',
		},
		{
			restaurant: 'Teton Tiger',
			description: 'Call ahead for curbside pickup.',
			hours: '',
			phone: '(307) 733-4111',
			buttonText: 'Order By Phone',
			buttonUrl: 'tel:(307) 733-4111',
			menuUrl: 'http://www.tetontiger.com/',
		},
		{
			restaurant: 'Cowboy Coffee',
			description: 'Order online for takeout or delivery.',
			hours: '8AM - 3PM.  || We are closed on Sunday.',
			phone: '(307) 733-7392',
			buttonText: 'Online Menu',
			buttonUrl:
				'https://us.orderspoon.com/cowboycoffee?fbclid=IwAR0-O6U-NMAeKquC8wMB92M-JVN5wdr2vQSz9SwJlGb-ErcHcccWVrxNXvw',
			menuUrl: '',
		},
	];

	return restaurants;
};
export default Restaurants;
