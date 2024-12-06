function agregarC() {
  type = document.getElementById("type").value;
  comment = document.getElementById("comment").value;

  ele = document.getElementById(type).innerHTML;
  ele +=
    "<div class='flex justify-between p-1 rounded-md border border-black rounded-md bg-white'><p class='grow'>" +
    comment +
    "</p><button onclick='eliminarC(this)' class='bg-red-500 rounded-full fill-white size-7 p-1'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' height='20' width='20'><path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'/></svg></button></div>";
  document.getElementById(type).innerHTML = ele;

  document.getElementById("comment").value = "";
}

function eliminarC(a) {
  a.parentElement.remove();
}
