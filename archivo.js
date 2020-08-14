
let fileSystem =require("fs");

fileSystem.writeFile('extracto.csv','Fecha,Descripcion,Valor \n 13/08/2020,pago mercado,$50.000',function(err){ //Crear archivos
    if(err){
        throw err;
    }
    else {
        console.log('Saved');
    }
});

fileSystem.readFile('extracto.csv',"utf8",function(err,data){ //Leer las lineas del archivo
    if (err){
        console.log(err);
    }
    texto=data;
    console.log(data);
});

console.log("hola mundo");