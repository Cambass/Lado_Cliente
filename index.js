function ganancia(){
    var valor = document.getElementById("valor").value;
    var porcentaje = document.getElementById("pgan").value;
    var ganan = (valor * porcentaje)/100;        
    document.getElementById("ganan").value = ganan;     
    var iva = (valor*19)/100;    
    parseInt(iva);
    total =  Number(valor) + Number(ganan) + Number(iva);
    document.getElementById("total").value = total;     
}

function resistencia(){
    var b1 = document.r.b1.value;
    var b2 = document.r.b2.value;
    var b3 = document.r.b3.value;

    var v1 = b1+b2;
    var v2 = Number(v1) * Number(b3); 

    document.r.v.value = v2; 
}