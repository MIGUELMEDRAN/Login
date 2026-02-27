import {
  listVariedades,
  addVariedad,
  editVariedad,
  removeVariedad
} from './variedades.service.js';

export async function getVariedadesController(req, res, next) {
  try {
    const variedades = await listVariedades();
    return res.status(200).json(variedades);
  } catch (error) {
    return next(error);
  }
}

export async function createVariedadController(req, res, next) {
  try {
    const { nombre, descripcion } = req.body;
    const variedad = await addVariedad(nombre, descripcion);
    return res.status(201).json(variedad);
  } catch (error) {
    return next(error);
  }
}

export async function updateVariedadController(req, res, next) {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    await editVariedad(id, nombre, descripcion);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

export async function deleteVariedadController(req, res, next) {
  try {
    const { id } = req.params;
    await removeVariedad(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}
