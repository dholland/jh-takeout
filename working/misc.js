 

function load() {
	let data = JSON.parse(restaurants);
    console.log(data);
    return data
}

function name(data){
    let name = data.
}

function myFunction(data) {
    let name out = "";
    var i;
    for(i = 0; i < data.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
} 

// <div id="replace" class="restaurants-item">
// 					<h2>Resturant Name</h2>



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
