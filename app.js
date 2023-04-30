

alert("Ingrese la opcion del producto que desea llevar,para salir ingrese 0")
let seleccionarProductos = Number(prompt( "1-holla $3000 2-sarten $2000 3-jarra $1000 4-vaso $500"))
let seleccionarCantidad;
let total = 0;

const cantidad = (cant,precion) => {
    return cant * precion 
}


while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad= Number(prompt("el producto seleccionado es holla, indique la cantidad"))
              total += cantidad(seleccionarCantidad, 3000)
                break;

        case 2:
            seleccionarCantidad= Number(prompt("el producto seleccionado es sarten, indique la cantidad"))
              total += cantidad(seleccionarCantidad, 2000)
                break; 

        case 3:
            seleccionarCantidad= Number(prompt("el producto seleccionado es jarra, indique la cantidad"))
              total += cantidad(seleccionarCantidad, 1000)
                break;

        case 4:
            seleccionarCantidad= Number(prompt("el producto seleccionado es vaso, indique la cantidad"))
              total += cantidad(seleccionarCantidad, 500)
                break;

                default:
                  break;  

       }
       seleccionarProductos = Number(prompt( "1-holla $3000 2-sarten $2000 3-jarra $1000 4-vaso $500"))

    }


    alert("el total de la compra es de:" + total)

    const envio = () => {
      if (total >= 10000) {
        alert("El envio es gratuito")
      }else{
        total += 1000
        alert("el costo de envio es de 1000, el total es: " + total)
      }
  }

  envio()

  