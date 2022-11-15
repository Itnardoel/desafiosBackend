# Desafio 10
Este servicio permite crear 5 **productos** de manera aleatoria. Posee un servicio de chat usando sockets, y el mismo se obtiene desde el backend **normalizado**. Se debe ingresar con un usuario.

## Configuración
Primero debemos crear un archivo en la raíz proyecto con el nombre `.env` con el siguiente contenido:
```
NODE_PORT=8080
NODE_ENV=local
```
Acá estamos configurando una variable de entorno para nuestro proyecto las cuales se especifican a continuación:
| VARIABLE | VALOR DEFAULT | DESCRIPCIÓN |
| ------ | ------ | ------ |
| `NODE_PORT` | `8080` | Puerto por donde escuchará nuestro servicio. |
| `NODE_ENV` | `local` | Entorno en el cual se ejecuta. |

## Ejecutar en producción
```sh
npm start
```

## Ejecutar en desarrollo
```sh
npm run dev
```

## Ejecutar en desarrollo
En el archivo `index.js` linea 21, se debe agregar la ruta para utilizar Mongo Atlas.