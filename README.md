# Configuracion de la aplicacion de React vite con npm

## En este apartado apareceran los comandos basicos para crear el proyecto

Aqui se colocaran los comandos, cambios y configuraciones necesarias para que se pueda replicar la aplicacion

**Nos posicionamos en una carpeta y ejecutamos el siguiente comando**

    npm create vite

*Elegiremos a continuacion las caracteristicas de la aplicacione segun nuestros requerimientos*

**Una vez termine de crearse el proyecto instalaremos las depencias que se encuentran en el proyecto**

    npm install

**Para iniciar el proyecto usaremos:**

    npm run dev


**Instalaremos los PropTypes ya que vite no los tiene implementados a contrario que un proyecto react-app**

    npm install prop-types

***

## En este apartado estaran los comandos para la configuracion de jest para el uso de pruebas unitarias

**Para instalar jest usaremos**

    npm install --save-dev jest

**Tendremos que insertar el siguiente codigo en dentro del apartado scripts en el package.json del proyecto**

~~~
{
  "scripts": {
    "test": "jest"
  }
}
~~~










