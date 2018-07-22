const axios = require('axios');

const getClima = async(lat, lng) => {

	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=08d19ff2a0002c81404f3707e243df67`)

	return resp.data.main.temp;
}


module.exports = {
	getClima
}