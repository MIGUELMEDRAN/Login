import express from 'express';
import cors from 'cors';
import authRoutes from './modules/auth/auth.routes.js';
import variedadesRoutes from './modules/variedades/variedades.routes.js';

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || '*'
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use('/api/auth', authRoutes);
app.use('/api/variedades', variedadesRoutes);

app.use((err, _req, res, _next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message: err.message || 'Error interno del servidor.' });
});

export default app;
