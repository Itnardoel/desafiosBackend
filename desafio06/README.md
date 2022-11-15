# Desafio 6
Este es un servicio backend que permite el **manejo de productos**. Este servicio permite `crear`, `obtener`, `actualizar` y `eliminar` **productos**. Ideal para un **ecommerce**.

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