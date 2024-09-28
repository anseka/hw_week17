let car = document.querySelector('#car');
let bike = document.querySelector('#bike');
let transport = document.querySelector('#transport');

let cars = [];
let bikes = [];
let transports = [];

const data = [
	{
		id: 1,
		type: 'car',
		brand: 'Audi',
		doors: 4,
		price: 4300000,
		image:
			'<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>',
	},
	{
		id: 2,
		type: 'car',
		brand: 'Mercedes-Benz',
		doors: 4,
		price: 2800000,
		image:
			'<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>',
	},
	{
		id: 3,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 210,
		price: 1300000,
		image:
			'<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>',
	},
	{
		id: 4,
		type: 'bike',
		brand: 'Harley-Davidson',
		maxSpeed: 220,
		price: 1400000,
		image:
			'<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>',
	},
];

class Transport {
	constructor(type, price, brand) {
		this.type = type;
		this.price = price;
		this.brand = brand;
	}
	getInfo() {
		return `
			type: ${this.type},
			brand: ${this.brand},
		`;
	}
	getPrice() {
		return `price: ${this.price} рублей`;
	}
}

class Car extends Transport {
	constructor(type, price, brand, doors) {
		super(type, price, brand);
		this.doors = doors;
	}
	getDoorsCount() {
		return `doors: ${this.doors}`;
	}
}

class Bike extends Transport {
	constructor(type, price, brand, speed) {
		super(type, price, brand);
		this.speed = speed;
	}
	getMaxSpeed() {
		return `speed: ${this.speed} км/ч`;
	}
}

function createTransports(data) {
	for (let i = 0; i < data.length; i++) {
		let transport;
		if (data[i].type === 'car') {
			transport = new Car(
				data[i].type,
				data[i].price,
				data[i].brand,
				data[i].doors
			);
			cars.push(transport);
		} else if (data[i].type === 'bike') {
			transport = new Bike(
				data[i].type,
				data[i].price,
				data[i].brand,
				data[i].maxSpeed
			);
			bikes.push(transport);
		} else {
			transport = new Transport(data[i].type, data[i].price, data[i].brand);
		}
		transports.push(transport);
	}
}

createTransports(data);

let listOfTransports = document.createElement('ul');
let listOfBikes = document.createElement('ul');
let listOfCars = document.createElement('ul');

transport.appendChild(listOfTransports);
transports.forEach(function (el) {
	let elOfList = document.createElement('li');
	elOfList.innerHTML = `${el.getInfo()} ${el.getPrice()}`;
	listOfTransports.appendChild(elOfList);
});

car.appendChild(listOfCars);
cars.forEach(function (el) {
	let elOfList = document.createElement('li');
	elOfList.innerHTML = `${el.getInfo()} ${el.getDoorsCount()}`;
	listOfCars.appendChild(elOfList);
});

bike.appendChild(listOfBikes);
bikes.forEach(function (el) {
	let elOfList = document.createElement('li');
	elOfList.innerHTML = `${el.getInfo()} ${el.getMaxSpeed()}`;
	listOfBikes.appendChild(elOfList);
});
