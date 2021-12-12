// Recupero carrito en localstorage
const productoLocalStorage = JSON.parse(localStorage.getItem("carrito"));
const totalAPagar = JSON.parse(localStorage.getItem("totalAPagar"));
const totalCarrito = JSON.parse(localStorage.getItem("totalCarrito"));

$("#total").html(`$${totalAPagar}`);
$("#subCarrito").html(`${totalCarrito}`);
$("#iconCarrito").html(`${totalCarrito}`);

const insertarCarrito = () => {

    for (const producto of productoLocalStorage) {
        $('#listadoCarrito').append(`
        <li class="list-group-item d-flex justify-content-between lh-sm" id="productoCanasta-${producto.id}">
        <div class="row mx-1">
            <div class="col-8">
                <h6 class="my-0">${producto.nombre}</h6>
            </div>
            <div class="col-2">
                <b>Cant:<span id="producto-cantidad-${producto.id}">${producto.cantidad}</span></b>
            </div>
            <div class="col-2">
                <span class="text-muted">$${producto.precio}</span>
            </div>
        </div>
    </li>
        `)
    }
}

insertarCarrito();

(function () {'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }else{
                    $("#formulario").remove();
                    $("#exito").delay(200).fadeIn("slow");
                    localStorage.clear();
                }

                form.classList.add('was-validated')
            }, false)
        })
})()