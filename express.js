let express= require("express"); //Importar libreria-Modulo
const { response, request } = require("express");
// Express es un servidor (Estos escuchan en todo momento)--> GET POST PUT DELETE
let app = express(); //asignar la libreria a una variable 

app.use(express.json()); //midleware intemediario, se mete entre la peticion del usuario y el servicio, es recomendable siempre usarlo en servicios

let usuarios = [ 
    {
      id:  1,
      name: 'Anny',
      email:  'anny@mail.com',
      address: 'Calle falsa #123'
    },
    {
        id:  2,
        name: 'Stella',
        email:  'anny@mail.com',
        address: 'Calle falsa #123'
    },
    {
        id:  3,
        name: 'Diego',
        email:  'anny@mail.com',
        address: 'Calle falsa #123'
    }
]
app.get("/test",(req,response)=>{
    response.json({
        mensaje:"Este si lo encontre"
    })
});

app.get("/users",(req,response)=>{
    response.json({
        mensaje:"Este usuario existe"
    })
});
app.post("/users",(request,response)=>{ //request path(ruta), body(peticion, la informacion),params (?query params), method (Metodo)
   console.log(request.params); //Importante
   console.log(request.body); // Importantes, aqui encuentro el codigo de la peticion 
   console.log(request.method); //logs
   console.log(request.path); //logs
   let name = request.body.name;
   let email = request.body.email;
   let address = request.body.address;

   if (!name || !email|| !address){
       response.json({mensaje: "informacion incompleta"});
   }
   else{
        response.json({mensaje: "funciono post"});
   }
  
});

//Indicar el puerto por el cual va a estar disponible
app.listen(5000,()=>{
    console.log("Estamos escuchando por el 5000");
});