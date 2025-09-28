# Pre-entrega Node.js

Este proyecto es una herramienta de línea de comandos (CLI) desarrollada en Node.js que interactúa con la FakeStoreAPI para realizar operaciones CRUD sobre productos.

## Funcionalidades

- Obtener todos los productos o uno en particular (GET)
- Crear un nuevo producto (POST)
- Actualizar un producto existente (PUT)
- Eliminar un producto por ID (DELETE)

## Cómo usar

Desde la terminal, ejecutá los siguientes comandos:

### Obtener productos

npm start GET products  
npm start GET products/ 5

### Crear producto

npm start POST products 

### Actualizar producto

npm start PUT products/5 "Zapatilla mujer" 550 "Calzado deportivo"

### Eliminar producto

npm start DELETE products/5

## Tecnologías utilizadas

- Node.js
- JavaScript 
- Fetch API (via node-fetch)
- FakeStoreAPI


## Estructura del proyecto

index.js         → Script principal con lógica CLI  
package.json     → Configuración del proyecto  
README.md        → Documentación del proyecto


## Instalación

1. Cloná el repositorio:

   git clone https://github.com/marRosario/Pre-entrega-Node.js.git

2. Entrá al directorio del proyecto:

   cd Pre-entrega-Node.js

3. Instalá las dependencias:

   npm install

4. Ejecutá el script desde la terminal:

   npm start GET products



## Autor

marRosario  
Proyecto realizado como parte de la pre-entrega del curso de Back-End con Node.js.
