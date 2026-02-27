import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET es obligatorio en el archivo .env');
}

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`);
});
