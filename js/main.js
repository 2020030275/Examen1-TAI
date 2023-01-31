$( document ).ready(function() {
    llamandoFetch()
});



const llamandoFetch=()=>{
    const url = '/html/servicio.json'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then (datos =>mostrarDatos(datos))
    .catch((reject)=>{
        respuesta.json
        console.log("Ocurrio un error")

    })
}


const mostrarDatos=(data)=>{
    

    let totalGanancia = 0
    $.each(data, function(index, item) {
        let ganancia =  (parseInt(item.preciovta)*parseInt(item.preciocompra))*parseInt(item.cantidad)
        var newRow = $("<tr>");
        var cols = "";
        cols += '<td>'+item.codigo+'</td>';
        cols += '<td>' + item.idcliente + '</td>';
        cols += '<td>' + item.descripcion + '</td>';
        cols += '<td>' + item.cantidad + '</td>';
        cols += '<td>' + item.preciovta + '</td>';
        cols += '<td>' + item.preciocompra + '</td>';
        cols += '<td>' + ganancia  + '</td>';
        newRow.append(cols);
        $("#tabla").append(newRow);0
        totalGanancia += ganancia
      });
    
      $('#totalGanancias').html('Total de ganancias: '+totalGanancia)

}


// document.getElementById("btnLimpiar").addEventListener("click", function(){
//     const r =document.getElementById("respuesta")
//     const m = document.getElementById("mientrasLlega")
//     r.innerHTML=""
//     m.innerHTML=""
// })