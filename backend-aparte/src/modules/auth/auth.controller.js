import { login } from './auth.service.js';

export async function loginController(req, res, next) {
  try {
    const { email, password } = req.body;
    const response = await login(email, password);
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}
