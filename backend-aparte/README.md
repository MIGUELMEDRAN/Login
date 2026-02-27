# Backend aparte (API independiente)

Este backend está separado del frontend y del backend previo, dentro del mismo repositorio.

## 1) Configuración
```bash
cd backend-aparte
cp .env.example .env
```

Ajusta en `.env`:
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`
- `JWT_SECRET`
- `FRONTEND_ORIGIN`
- `PORT` (por defecto 3001)

## 2) Instalar dependencias
```bash
npm install
```

## 3) Crear base de datos
Desde la raíz del repo:
```bash
mysql -u root -p < schema.sql
```

## 4) Ejecutar API
```bash
npm run dev
```

## 5) Endpoints
- `POST /api/auth/login`
- `GET /api/variedades` (protegido)
- `POST /api/variedades` (protegido)
- `PUT /api/variedades/:id` (protegido)
- `DELETE /api/variedades/:id` (protegido)

## 6) Usuario de prueba
- email: `admin@example.com`
- password: `123456`
