const axios = require('axios');

const getLugarLatLng = async(direccion) => {


	let encodeURL = encodeURI(direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyCHzWuFaTo8ipGLL-da3M6N1keHPrP1qss`)
		
	if (resp.data.status === 'ZERO_RESULTS') {
		throw new Error(`No hay resultados para la ciudad ${direccion}`);
	}

		
	let location = resp.data.results[0];

	let cord = location.geometry.location;
    
	return {
		lugar:location.formatted_address,
		lat:cord.lat,
		lng :cord.lng
	}

}


module.exports = {
	getLugarLatLng
}
