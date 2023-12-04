document.addEventListener("DOMContentLoaded", function () {
  const tareaInput = document.getElementById("tarea");
  const agregarBtn = document.getElementById("agregar");
  const listaTareas = document.getElementById("listaTareas");

  agregarBtn.addEventListener("click", function () {
    const tarea = tareaInput.value.trim();

    if (tarea !== "") {
      agregarTarea(tarea);
      tareaInput.value = "";
      tareaInput.focus();
    }
  });

  function agregarTarea(tarea) {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${tarea}
      <button type="button" class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
    `;
    listaTareas.appendChild(li);
  }

  window.eliminarTarea = function (elemento) {
    const tareaItem = elemento.parentNode;
    listaTareas.removeChild(tareaItem);
  };
});
