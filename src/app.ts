import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import productRoutes from './routes/product.routes';
import swaggerSpecs from './docs/swagger';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Swagger Documentation
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

export default app;
