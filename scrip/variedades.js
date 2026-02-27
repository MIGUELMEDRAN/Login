import ApiClient from './utils/ApiClient.js';
import VariedadesService from './services/VariedadesService.js';
import { API_BASE_URL } from './config.js';

const token = localStorage.getItem('token');
if (!token) {
  window.location.href = './index.html';
}

const apiClient = new ApiClient(API_BASE_URL);
const variedadesService = new VariedadesService(apiClient);

const tbody = document.getElementById('variedades-tbody');
const form = document.getElementById('variedad-form');
const logoutBtn = document.getElementById('logout-btn');

async function loadVariedades() {
  try {
    const variedades = await variedadesService.list(token);
    tbody.innerHTML = '';

    variedades.forEach((item) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.descripcion ?? ''}</td>
        <td>
          <button class="btn btn-sm btn-warning me-1" data-edit="${item.id}">Editar</button>
          <button class="btn btn-sm btn-danger" data-delete="${item.id}">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  } catch (error) {
    if (error.message.toLowerCase().includes('token')) {
      localStorage.removeItem('token');
      window.location.href = './index.html';
    } else {
      alert(error.message);
    }
  }
}

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const descripcion = document.getElementById('descripcion').value.trim();

  try {
    await variedadesService.create({ nombre, descripcion }, token);
    form.reset();
    await loadVariedades();
  } catch (error) {
    alert(error.message);
  }
});

tbody.addEventListener('click', async (event) => {
  const editId = event.target.getAttribute('data-edit');
  const deleteId = event.target.getAttribute('data-delete');

  if (editId) {
    const nombre = prompt('Nuevo nombre:');
    if (!nombre) return;
    const descripcion = prompt('Nueva descripción (opcional):') || '';

    try {
      await variedadesService.update(editId, { nombre, descripcion }, token);
      await loadVariedades();
    } catch (error) {
      alert(error.message);
    }
  }

  if (deleteId) {
    const confirmDelete = confirm('¿Deseas eliminar esta variedad?');
    if (!confirmDelete) return;

    try {
      await variedadesService.remove(deleteId, token);
      await loadVariedades();
    } catch (error) {
      alert(error.message);
    }
  }
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = './index.html';
});

loadVariedades();
