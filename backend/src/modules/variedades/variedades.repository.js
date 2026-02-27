import pool from '../../config/db.js';

export async function getAllVariedades() {
  const [rows] = await pool.query('SELECT id, nombre, descripcion, created_at FROM variedades ORDER BY id DESC');
  return rows;
}

export async function createVariedad(nombre, descripcion) {
  const [result] = await pool.query(
    'INSERT INTO variedades (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion || null]
  );

  return { id: result.insertId, nombre, descripcion: descripcion || null };
}

export async function updateVariedad(id, nombre, descripcion) {
  const [result] = await pool.query(
    'UPDATE variedades SET nombre = ?, descripcion = ? WHERE id = ?',
    [nombre, descripcion || null, id]
  );

  return result.affectedRows;
}

export async function deleteVariedad(id) {
  const [result] = await pool.query('DELETE FROM variedades WHERE id = ?', [id]);
  return result.affectedRows;
}
