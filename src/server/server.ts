// Se crea el servidor de express y se configuran los middlewares necesarios para el manejo de JSON y formularios, así como el log de solicitudes HTTP.
import express, { Application } from 'express';
import morgan from 'morgan';
import routesUsers from '@routes/routesUsers';
import routesRoles from '@routes/routesRoles';
import routesAuth from '@routes/routesAuth';
import routerReport from '@routes/routesReport';

const app: Application = express();

// Configuración de express para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para log de solicitudes HTTP
app.use(morgan('dev'));

// Configuración de las rutas
app.use('/api/v1', routesUsers); // Prefijo para las rutas de la API
app.use('/api/v1', routesRoles);
app.use('/api/v1', routesAuth);
app.use('/api/v1', routerReport)

export default app;