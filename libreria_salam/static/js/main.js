const productos = [

/* =========================
   LÁPICES Y LAPICERAS
========================= */

{
    categoria: "lapices",
    nombre: "Lapiceras",
    imagen: "lapiceras.webp"
},

{
    categoria: "lapices",
    nombre: "Lapiceras",
    imagen: "lapiceras1.webp"
},

{
    categoria: "lapices",
    nombre: "Lapiceras",
    imagen: "lapiceras2.webp"
},

{
    categoria: "lapices",
    nombre: "Lápices",
    imagen: "lapices.webp"
},

{
    categoria: "lapices",
    nombre: "Lápices",
    imagen: "lapices1.webp"
},

{
    categoria: "lapices",
    nombre: "Lápices",
    imagen: "lapices2.webp"
},

{
    categoria: "lapices",
    nombre: "Lápices",
    imagen: "lapices3.webp"
},

{
    categoria: "lapices",
    nombre: "Lápices",
    imagen: "lapices4.webp"
},


/* =========================
   CUADERNOS
========================= */

{
    categoria: "cuadernos",
    nombre: "Cuadernos",
    imagen: "cuadernos.webp"
},

{
    categoria: "cuadernos",
    nombre: "Cuadernos",
    imagen: "cuadernos1.webp"
},

{
    categoria: "cuadernos",
    nombre: "Cuadernos",
    imagen: "cuadernos2.webp"
},


/* =========================
   ÚTILES ESCOLARES
========================= */

{
    categoria: "utiles",
    nombre: "Boligoma",
    imagen: "boligoma.webp"
},

{
    categoria: "utiles",
    nombre: "Corrector",
    imagen: "corrector.webp"
},

{
    categoria: "utiles",
    nombre: "Minigoma",
    imagen: "minigoma.webp"
},

{
    categoria: "utiles",
    nombre: "Plasticola",
    imagen: "plasticola.webp"
},

{
    categoria: "utiles",
    nombre: "Reglas",
    imagen: "reglas.webp"
},

{
    categoria: "utiles",
    nombre: "Resaltadores",
    imagen: "resaltador.webp"
},

{
    categoria: "utiles",
    nombre: "Sacapuntas",
    imagen: "sacapuntas.webp"
},

{
    categoria: "utiles",
    nombre: "Tijeras",
    imagen: "tijeras.webp"
},

{
    categoria: "utiles",
    nombre: "Marcadores",
    imagen: "marcadores.webp"
},

{
    categoria: "utiles",
    nombre: "Marcadores",
    imagen: "marcadores1.webp"
}

];


const contenedor = document.getElementById("productos");
const contador = document.getElementById("contador");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");

let categoriaActual = "todos";


/* =====================================================
   MODAL DE IMAGEN
===================================================== */

const modal = document.createElement("div");

modal.id = "modalProducto";

modal.innerHTML = `
    <div class="modal-fondo"></div>

    <div class="modal-contenido">

        <button
            type="button"
            class="modal-cerrar"
            aria-label="Cerrar"
        >
            ×
        </button>

        <img
            id="modalImagen"
            src=""
            alt=""
        >

        <div id="modalNombre"></div>

    </div>
`;

document.body.appendChild(modal);


const modalImagen =
    document.getElementById("modalImagen");

const modalNombre =
    document.getElementById("modalNombre");

const modalCerrar =
    modal.querySelector(".modal-cerrar");

const modalFondo =
    modal.querySelector(".modal-fondo");


/* =====================================================
   ABRIR MODAL
===================================================== */

function abrirModal(producto) {

    modalImagen.src =
        `./static/img/${producto.imagen}`;

    modalImagen.alt =
        producto.nombre;

    modalNombre.textContent =
        producto.nombre;

    modal.classList.add("mostrar");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   CERRAR MODAL
===================================================== */

function cerrarModal() {

    modal.classList.remove("mostrar");

    document.body.style.overflow = "";

}


modalCerrar.addEventListener(
    "click",
    cerrarModal
);


modalFondo.addEventListener(
    "click",
    cerrarModal
);


/* ESC PARA CERRAR */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        cerrarModal();
    }

});


/* =====================================================
   RENDER PRODUCTOS
===================================================== */

function renderProductos() {

    const busqueda = buscador.value
        .toLowerCase()
        .trim();


    const resultados = productos.filter(producto => {

        const coincideCategoria =
            categoriaActual === "todos" ||
            producto.categoria === categoriaActual;


        const coincideBusqueda =
            producto.nombre
                .toLowerCase()
                .includes(busqueda);


        return coincideCategoria && coincideBusqueda;

    });


    contenedor.innerHTML = "";


    contador.textContent =
        `${resultados.length} producto${resultados.length !== 1 ? "s" : ""}`;


    if (resultados.length === 0) {

        sinResultados.classList.remove("hidden");

        return;

    }


    sinResultados.classList.add("hidden");


    resultados.forEach((producto, index) => {

        const tarjeta =
            document.createElement("article");


        tarjeta.className =
            "producto-card bg-gray-900 border border-gray-800 rounded-2xl p-3 md:p-4 group";


        tarjeta.style.animationDelay =
            `${index * 35}ms`;


        tarjeta.innerHTML = `

            <div class="producto-imagen">

                <img
                    src="./static/img/${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

                <div class="producto-zoom">
                    <span>🔍</span>
                    <span>Ver imagen</span>
                </div>

            </div>


            <div class="flex items-center justify-between gap-2 mt-4">

                <h3 class="text-white font-bold text-sm md:text-base">
                    ${producto.nombre}
                </h3>

                <span class="producto-marca">
                    SALAM
                </span>

            </div>

        `;


        /* CLICK / TOUCH */

        tarjeta.addEventListener("click", () => {

            abrirModal(producto);

        });


        contenedor.appendChild(tarjeta);

    });

}


/* =====================================================
   FILTROS
===================================================== */

document.querySelectorAll(".filtro").forEach(boton => {

    boton.addEventListener("click", () => {

        categoriaActual =
            boton.dataset.categoria;


        document.querySelectorAll(".filtro").forEach(btn => {

            btn.classList.remove("activo");

        });


        boton.classList.add("activo");


        renderProductos();

    });

});


/* =====================================================
   BUSCADOR
===================================================== */

buscador.addEventListener(
    "input",
    renderProductos
);


/* =====================================================
   CSS DEL ZOOM
===================================================== */

const estilosZoom =
document.createElement("style");


estilosZoom.textContent = `

/* TARJETA */

.producto-card {
    cursor: pointer;
    position: relative;
    transition:
        transform .3s ease,
        border-color .3s ease,
        box-shadow .3s ease;
}

.producto-card:hover {
    transform: translateY(-6px);
    border-color: rgba(139, 92, 246, .55);
    box-shadow:
        0 15px 40px rgba(0, 0, 0, .35),
        0 0 25px rgba(124, 58, 237, .08);
}


/* IMAGEN */

.producto-imagen {
    position: relative;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    border-radius: 14px;
    background: #111827;
}


.producto-imagen img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition:
        transform .45s cubic-bezier(.2,.8,.2,1);
}


/* ZOOM AL PASAR EL MOUSE */

.producto-card:hover
.producto-imagen img {
    transform: scale(1.12);
}


/* INDICADOR */

.producto-zoom {
    position: absolute;
    left: 50%;
    bottom: 12px;

    transform:
        translate(-50%, 15px);

    display: flex;
    align-items: center;
    gap: 6px;

    padding: 7px 12px;

    border-radius: 999px;

    background: rgba(10, 10, 20, .82);
    backdrop-filter: blur(10px);

    color: white;
    font-size: 11px;
    font-weight: 600;

    opacity: 0;

    transition:
        opacity .3s ease,
        transform .3s ease;

    pointer-events: none;

    white-space: nowrap;
}


.producto-card:hover
.producto-zoom {
    opacity: 1;

    transform:
        translate(-50%, 0);
}


/* =====================================================
   MODAL
===================================================== */

#modalProducto {
    position: fixed;
    inset: 0;

    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    opacity: 0;
    visibility: hidden;

    transition:
        opacity .25s ease,
        visibility .25s ease;
}


#modalProducto.mostrar {
    opacity: 1;
    visibility: visible;
}


/* FONDO */

.modal-fondo {
    position: absolute;
    inset: 0;

    background:
        rgba(0, 0, 0, .82);

    backdrop-filter:
        blur(12px);
}


/* CONTENEDOR */

.modal-contenido {
    position: relative;

    z-index: 2;

    width: min(850px, 95vw);

    max-height: 90vh;

    padding: 18px;

    border-radius: 24px;

    background:
        rgba(17, 24, 39, .96);

    border:
        1px solid rgba(255,255,255,.12);

    box-shadow:
        0 30px 100px rgba(0,0,0,.7);

    transform:
        scale(.9)
        translateY(20px);

    transition:
        transform .3s cubic-bezier(.2,.8,.2,1);

    text-align: center;
}


#modalProducto.mostrar
.modal-contenido {
    transform:
        scale(1)
        translateY(0);
}


/* IMAGEN GRANDE */

#modalImagen {
    display: block;

    width: 100%;
    height: min(72vh, 650px);

    object-fit: contain;

    border-radius: 16px;
}


/* NOMBRE */

#modalNombre {
    margin-top: 12px;

    color: white;

    font-size: 16px;

    font-weight: 700;
}


/* BOTÓN CERRAR */

.modal-cerrar {
    position: absolute;

    top: 12px;
    right: 12px;

    z-index: 5;

    width: 38px;
    height: 38px;

    border: 1px solid rgba(255,255,255,.12);

    border-radius: 50%;

    background:
        rgba(0,0,0,.7);

    color: white;

    font-size: 28px;
    line-height: 30px;

    cursor: pointer;

    transition:
        background .2s ease,
        transform .2s ease;
}


.modal-cerrar:hover {
    background: #7c3aed;
    transform: rotate(90deg);
}


/* MOBILE */

@media (max-width: 640px) {

    .producto-card:hover {
        transform: none;
    }

    .producto-card:hover
    .producto-imagen img {
        transform: none;
    }

    .producto-zoom {
        display: none;
    }

    .modal-contenido {
        padding: 12px;
        border-radius: 18px;
    }

    #modalImagen {
        height: 65vh;
    }

}

`;

document.head.appendChild(estilosZoom);


/* =====================================================
   INICIO
===================================================== */

renderProductos();