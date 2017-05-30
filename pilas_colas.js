var mecanicos = [];
mecanicos.push("Carlos");
mecanicos.push("Fernando");
mecanicos.push("Juan");

var maquinas = [];

maquinas.push(303);
maquinas.push(208);
maquinas.push(190);

/*
 * La siguiente funcion chequea el tamaño del array correspondiente ****in****.
 * Si da 0 es true si da cualquier otro valor devuelve false ****out**** Return
 * devuelve una variable arreglo ,es un parametro de entrada, en cuanto
 * invoquemos a otra variable en su lugar en esVacia la funcion se ejecutara con
 * maquinas y luego con mecanico
 */

/*
 * function esVacia(arreglo)
 *  { if (arreglo.length == 0) return true; else return false; }
 */

function esVacia(arreglo) {
	return (arreglo.length == 0);
}
esVacia(maquinas);
esVacia(mecanicos);

/*Debido a que maquinas es cola y mecanicos una pila, la forma de retirar los valores es diferente
 * shift toma el valor mas antiguo, pop retira el valor mas nuevo*/
function asignar(){
	var Nmaquina=maquinas.shift();
	var Nmecanico=mecanicos.pop();
	document.write(Nmaquina+"-"+Nmecanico);//document.write escribe lo que designo
	document.write("<br>")
}

/*While es un cuando, "Cuando esVacia es Falso en maquinas y mecanicos
 * la funcion asignar se ejecuta"*/

//! sirve para negar (!soleado significa que negamos que este soleado)
//&& significa y
//|| or es o lógico
//
while(!esVacia(maquinas) && !esVacia(mecanicos)){

	asignar();
}