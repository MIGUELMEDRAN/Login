import jwt from 'jsonwebtoken';
import { findUserByEmail } from './auth.repository.js';
import { verifyPassword } from '../../utils/password.js';

export async function login(email, password) {
  if (!email || !password) {
    const error = new Error('Email y contraseña son obligatorios.');
    error.statusCode = 400;
    throw error;
  }

  const user = await findUserByEmail(email);
  if (!user) {
    const error = new Error('Credenciales inválidas.');
    error.statusCode = 401;
    throw error;
  }

  const validPassword = verifyPassword(password, user.password_hash);
  if (!validPassword) {
    const error = new Error('Credenciales inválidas.');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
}
