# Desafio 9
Este servicio permite crear 5 **productos** de manera aleatoria. Posee un servicio de chat usando sockets, y el mismo se obtiene desde el backend **normalizado**.

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
## Postman Collection

En la raíz del proyecto encontrarán el archivo `Desafio 9.postman_collection.json` que les permitirá probar desde postman los endpoint del servicio.