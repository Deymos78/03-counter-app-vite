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

**Para arrancar los test usaremos**

    npm run test

*Con este comando se arrancan todos los test que se encuentren en el proyecto*

**Si queremos que nuestros test se vuelvan a lanzar cada vez que realizamos algun cambio configuraremos el scrip en package.json**

~~~
{
  "scripts": {
    "test": "jest --watchAll"
  }
}
~~~

*watchAll nos permitira escuchar todos los cambios que realizemos en el proyecto y se volveran a lanzar los test*

**Para tener una depencia de desarrollo para ayudarnos con los test usaremos el siguiente comando**

    npm install -D @types/jest

*Con este comando al momento de realizar los test nos ayudara a encontrar las funcionalidades*

***

### NOTA DE ACTUALIZACION - EXTENSION DE ARCHIVOS

SI VEMOS ESTE ERROR => "You appear to be using a native ECMAScript module configuration file, which is only supported when running Babel asynchronously." 

**Cambiar extensión de los archivos jest.config.js y babel.config.js a .cjs**

***

## Ahora haremos las configuraciones para Babel

**Instalares las dependencias requeridas para usar babel**

    npm install --save-dev babel-jest @babel/core @babel/preset-env

**Tambien hay que instalar la dependencia @babel/preset-react**

    npm install -D @babel/preset-react

**Ahora tendremos que crear un nuevo archivo en la raiz del proyecto llamado 'babel.config.cjs' y colocar el siguiente bloque dentro**
*Debido a actualizaciones el archivo pasa de ser .js a .cjs*

~~~
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: { esmodules: true}}],
      ['@babel/preset-react', {runtime: 'automatic'}],
    ],
  };
~~~

**Hay que instalar la dependencia jest-enviroment-jsdom para que no me salte un error al solicitarmela**

    npm install -D jest-environment-jsdom

**Ahora tendremos que crear un nuevo archivo en la raiz del proyecto llamado 'jest.config.cjs' y colocar el siguiente bloque dentro**

~~~
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
~~~

**Antes de crear el archivo jest.setup.js tendremos que instalar las dependencias de desarrollo, las cuales no usaremos en produccion**

npm install -D whatwg-fetch

**Tambien tendremos que crear el archivo 'jest.setup.js' y colocar lo siguiente dentro del archivo**

~~~
import 'whatwg-fetch';
~~~

***

## Ahora se realizara las configuraciones necesarias para poder realizar pruebas sobre los componentes de react

**Empezamos instalando testing react apps**

    npm install --save-dev react-test-renderer


























