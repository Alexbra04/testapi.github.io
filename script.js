const formElement = document.getElementById("guardarTransaccion");

formElement.addEventListener("submit", (event)=> {
    event.preventDefault();
    let transaccionDescripcion = document.getElementById("transaccionDescripcion").value;
    let transaccionPrecio = document.getElementById("transaccionPrecio").value;
    let transaccion = { transaccionDescripcion: transaccionDescripcion, transaccionPrecio: transaccionPrecio };
    let transaccionJson = JSON.stringify(transaccion);
    //Enviar los datos al Backend y guardarlos
    fetch('http://localhost:3000/transacciones', {
        method : 'Post',
        body: transaccionJson
    })
})

fetch('http://localhost:3000/transacciones').then(x => x.json()).then(console.log)