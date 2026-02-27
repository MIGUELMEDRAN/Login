CREATE DATABASE IF NOT EXISTS proyecto_db;
USE proyecto_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS variedades (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(120) NOT NULL,
  descripcion TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email, password_hash)
VALUES (
  'Administrador',
  'admin@example.com',
  'f52e4a4592b44d01d3355196ea9e379b:88f219dfba37e75b64e43d5b36c06393e79899341b96adda218891fe9790a8975e8b5025d31131384f42d8e27ef00596aabcc0badce749914b866abe6c68bae3'
)
ON DUPLICATE KEY UPDATE email = VALUES(email);

INSERT INTO variedades (nombre, descripcion)
VALUES ('Cabernet Sauvignon', 'Variedad tinta de cuerpo medio-alto')
ON DUPLICATE KEY UPDATE nombre = VALUES(nombre);
