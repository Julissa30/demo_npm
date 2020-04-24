const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level="debug";

function sumar(n1,n2){
	return n1+n2;
	}

logger.debug("Mi primer app con npm");
logger.info("Se ejecuto correctamente mi porceso.");
logger.warn("No se encontro el archivo esperado.");
logger.error("La aplicacion no se pudo conectar a la bd.");
logger.fatal("La aplicacio no se pudo conectar a la bd");

module.exports = sumar;
