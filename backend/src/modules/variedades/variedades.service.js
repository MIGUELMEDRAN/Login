import {
  getAllVariedades,
  createVariedad,
  updateVariedad,
  deleteVariedad
} from './variedades.repository.js';

export async function listVariedades() {
  return getAllVariedades();
}

export async function addVariedad(nombre, descripcion) {
  if (!nombre || !nombre.trim()) {
    const error = new Error('El campo nombre es obligatorio.');
    error.statusCode = 400;
    throw error;
  }

  return createVariedad(nombre.trim(), descripcion?.trim());
}

export async function editVariedad(id, nombre, descripcion) {
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    const error = new Error('ID inválido.');
    error.statusCode = 400;
    throw error;
  }

  if (!nombre || !nombre.trim()) {
    const error = new Error('El campo nombre es obligatorio.');
    error.statusCode = 400;
    throw error;
  }

  const affectedRows = await updateVariedad(Number(id), nombre.trim(), descripcion?.trim());
  if (affectedRows === 0) {
    const error = new Error('Variedad no encontrada.');
    error.statusCode = 404;
    throw error;
  }
}

export async function removeVariedad(id) {
  if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
    const error = new Error('ID inválido.');
    error.statusCode = 400;
    throw error;
  }

  const affectedRows = await deleteVariedad(Number(id));
  if (affectedRows === 0) {
    const error = new Error('Variedad no encontrada.');
    error.statusCode = 404;
    throw error;
  }
}
