const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({

	direccion:{
		alias:'d',
		desc: "Direccion de la ciudad para obtener el clima",
		default: true
	}
}).argv;


let getInfo = async (direccion) => {
	try{
		let cord = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(cord.lat, cord.lng);

		return `La temperatura en ${cord.lugar} es de ${temp}`;
	}catch(e){
		return `No se pudo determinar la tempertura para la direccion ${direccion}`;
	}
}

getInfo(argv.direccion)
.then(msj => console.log(msj))
.catch(err => console.log(err));
