const countryList = document.getElementById('countries');
let wArr = [];

async function func(cId){

	const country = {
		name: '' ,
		weather: '' ,
		temperature: '',
		img: '',
	}

	const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cId}&appid=27b486ad2a86979f1954cf9b50a86cf0`);
	const data = await res.json();

	console.log(data)

	country.name = data.name
	country.weather = data.weather[0].main
	country.temperature = data.main.temp
	country.img = data.weather[0]['icon']

	wArr.push(country)

	 displayCountries();
}

function displayCountries() {
	let displayCountry = '';
	wArr.forEach((item, i) => {
		
		displayCountry += `
		<div id="country_${i}" class="country"> 
			<p class="cName"> ${item.name}</p>
			<p class="cWeather"> ${item.weather} </p>
			<p class="cDegrees"> ${Math.round(item.temperature - 273)} °C </p>
			<img class="cIcon" src="https://openweathermap.org/img/wn/${item.img}@2x.png"> 
		</div>
		`;
		countryList.innerHTML = displayCountry;


	});
}

 window.addEventListener("load", function(event) {
	   
 	//функция , чтобы города показывались по порядку их добавление (можно убрать, ибо в данном случае не особо важен порядок)
	async function show() {

	//заполнение массива городами по id из OpenWeather 
	await func('8019846');
	await func('1548797');
	await func('1710908');

	}

	show();
  });





