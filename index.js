const [, , method,resource,...args]=process.argv;
const baseURL="http://fakestoreapi.com";

async function main(){

    try{
        switch(method.toUpperCase()){
            case "GET":
                await handleGet(resource, args);
                break;
            case "POST":
                await handlePost(resource,args)
                break;
            case "PUT":
            await handlePut(resource,args)
                break;

            case "DELETE":
                await handleDelete(resource);
                break;
                default:
                    console.log("El metodo no es correcto. Usa GET, POST o DELETE.");
 
        }
    }catch(error){
        console.log("Error:", error.message)
    }
}
main()

//pedir todos los productos o uno en particular (npm start GET products)
async function handleGet(resource,args){

let url=`${baseURL}/${resource}`;
if(args.length>0){
    url+=`/${args[0]}`
}
const response=await fetch(url);
const data=await response.json();

if(Array.isArray(data)){
    const productosFiltrados=data.map(({id,title,price,category})=>({
        id,
        title,
        price,
        category
    }))
console.log("Productos filtrados:\n", JSON.stringify(productosFiltrados,null,2))

}else{
    const {id,title,price,category}=data;
    console.log("Producto filtrado:\n", JSON.stringify({id,title,price,category},null,2))
}



}

//Crear uno nuevo (npm start POST products)

async function handlePost(resource, args) {
  const [title, price, category] = args;

  const response = await fetch(`${baseURL}/${resource}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
        title:"Sansung",
        price:950,
        category: "celular",
        image:"https://tiendaonline.movistar.com.ar/samsung-galaxy-a06-64gb-4g.html?aux_utm_campaign=&adgroupid=&keyword=&ds_e_adid=&ds_e_matchtype=&ds_e_device=c&ds_e_network=x&ds_e_product_group_id=&ds_e_product_id=19558&ds_e_product_merchant_id=117738360&ds_e_product_country=AR&ds_e_product_language=es&ds_e_product_channel=online&ds_e_product_store_id={product_store_id}&ds_url_v=2&gclsrc=aw.ds&gad_source=1&gad_campaignid=20517989197&gbraid=0AAAAADzxJQPeVpQRbmEBTuFHDKPqv2XLk&gclid=CjwKCAjwisnGBhAXEiwA0zEOR_08jUG0yl2kyWcbKDxBeMud6tt4zcEKSUYQBbjlIWvqJnK4thMAnRoCsroQAvD_BwE"
     }),
  });

  const data = await response.json();
  console.log('Producto creado:', data);
}

//Actualizar producto (npm start PUT products/1 "Sandalia" 230 "Calzado de niña" )->por ejemplo  )
async function handlePut(resource, args) {
  const [title, price, category] = args;

  const producto={title,price,category}
  const response = await fetch(`${baseURL}/${resource}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });

  const productoActualizado = await response.json();
  console.log("Producto actualizado:\n",JSON.stringify (productoActualizado,null,2));//formato para la salida en terminal 
}


//Eliminar producto (npm start DELETE products/1)

async function handleDelete(resource) {
  const [base, id] = resource.split('/');
  const response = await fetch(`${baseURL}/${base}/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();
  console.log('Producto eliminado:', data);
}
