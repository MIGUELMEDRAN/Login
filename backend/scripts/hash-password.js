import { hashPassword } from '../src/utils/password.js';

const password = process.argv[2] || '123456';
console.log(hashPassword(password));
