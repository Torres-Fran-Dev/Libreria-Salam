/* =====================================================
   CATÁLOGO Y CARRITO DE COMPRAS - SALAM LIBRERÍA
===================================================== */

const productos = [
    { id: 1, categoria: "lapices", nombre: "Bolígrafo de Colores", imagen: "boligrafo_colores.webp", precio: 1300 },
    { id: 2, categoria: "lapices", nombre: "Bolígrafos de Colores", imagen: "boligrafos_colores1.webp", precio: 5000 },
    { id: 3, categoria: "lapices", nombre: "Bolígrafos de Gel", imagen: "boligrafos_gel.webp", precio: 1400 },
    { id: 4, categoria: "lapices", nombre: "Lapiceras Azules", imagen: "lapiceras_azul.webp", precio: 350 },
    { id: 5, categoria: "lapices", nombre: "Lapiceras de Colores", imagen: "lapiceras_colores.webp", precio: 1200 },
    { id: 6, categoria: "lapices", nombre: "Lapiceras de Colores Alt", imagen: "lapiceras_colores1.webp", precio: 1250 },
    { id: 7, categoria: "lapices", nombre: "Lapiceras con Muñequitos", imagen: "lapiceras_munequitos.webp", precio: 1500 },
    { id: 8, categoria: "lapices", nombre: "Lapiceras Negras y Azules", imagen: "lapiceras_negra_azul.webp", precio: 350 },
    { id: 9, categoria: "lapices", nombre: "Lapiceras Rojas", imagen: "lapiceras_rojas.webp", precio: 470 },
    { id: 10, categoria: "lapices", nombre: "Lapiceras Verdes", imagen: "lapiceras_verdes.webp", precio: 470 },
    { id: 11, categoria: "lapices", nombre: "Lápices de Colores", imagen: "lapices_colores.webp", precio: 280 },
    { id: 12, categoria: "lapices", nombre: "Lápices de Colores 1", imagen: "lapices_colores1.webp", precio: 2500 },
    { id: 13, categoria: "lapices", nombre: "Lápices de Colores 2", imagen: "lapices_colores2.webp", precio: 2000 },
    { id: 14, categoria: "lapices", nombre: "Lápices con Dibujitos", imagen: "lapices_dibujitos.webp", precio: 300 },
    { id: 15, categoria: "lapices", nombre: "Lápiz Negro", imagen: "lapiz_negro.webp", precio: 1500 },

    { id: 16, categoria: "cuadernos", nombre: "Block Blanco", imagen: "block_blanco.webp", precio: 4800 },
    { id: 17, categoria: "cuadernos", nombre: "Block de Color", imagen: "block_color.webp", precio: 5000 },
    { id: 18, categoria: "cuadernos", nombre: "Cuadernos", imagen: "cuadernos.webp", precio: 5600 },

    { id: 19, categoria: "utiles", nombre: "Adhesivo", imagen: "adhesivo.webp", precio: 1500 },
    { id: 20, categoria: "utiles", nombre: "Adhesivo en Barra", imagen: "adhesivo_en_barra.webp", precio: 690 },
    { id: 21, categoria: "utiles", nombre: "Boligoma", imagen: "boligoma.webp", precio: 2600 },
    { id: 22, categoria: "utiles", nombre: "Cartulina", imagen: "cartulina.webp", precio: 700 },
    { id: 23, categoria: "utiles", nombre: "Cartulina 1", imagen: "cartulina1.webp", precio: 700 },
    { id: 24, categoria: "utiles", nombre: "Cinta Adhesiva", imagen: "cinta.webp", precio: 600 },
    { id: 25, categoria: "utiles", nombre: "Cinta Adhesiva 1", imagen: "cinta1.webp", precio: 1200 },
    { id: 26, categoria: "utiles", nombre: "Corrector", imagen: "corrector.webp", precio: 800 },
    { id: 27, categoria: "utiles", nombre: "Crayones Chiquis", imagen: "crayones_chiquis.webp", precio: 900 },
    { id: 28, categoria: "utiles", nombre: "Etiquetas", imagen: "etiquetas.webp", precio: 1000 },
    { id: 29, categoria: "utiles", nombre: "Fibras", imagen: "fibras.webp", precio: 3200 },
    { id: 30, categoria: "utiles", nombre: "Fibras Comunes", imagen: "fibras_comunes.webp", precio: 2400 },
    { id: 31, categoria: "utiles", nombre: "Folios", imagen: "folios.webp", precio: 150 },
    { id: 32, categoria: "utiles", nombre: "Goma de Borrar", imagen: "goma.webp", precio: 250 },
    { id: 33, categoria: "utiles", nombre: "Goma Eva Común", imagen: "gomaeva_comun.webp", precio: 800 },
    { id: 34, categoria: "utiles", nombre: "Goma Eva Glitter", imagen: "gomaeva_glitter.webp", precio: 1500 },
    { id: 35, categoria: "utiles", nombre: "Hojas", imagen: "hojas.webp", precio: 5800 },
    { id: 36, categoria: "utiles", nombre: "Marcador Negro Permanente", imagen: "marcador_negro_permanente.webp", precio: 1200 },
    { id: 37, categoria: "utiles", nombre: "Marcador Rojo", imagen: "marcador_rojo.webp", precio: 3000 },
    { id: 38, categoria: "utiles", nombre: "Marcadores Permanentes Rojos", imagen: "marcadores_permanentes_rojos.webp", precio: 1200 },
    { id: 39, categoria: "utiles", nombre: "Mini Resaltadores", imagen: "mini_resaltadores.webp", precio: 4500 },
    { id: 40, categoria: "utiles", nombre: "Minigoma Pastel", imagen: "minigoma_pastel.webp", precio: 900 },
    { id: 41, categoria: "utiles", nombre: "Papel Glacé Fluo", imagen: "papel_glace_fluo.webp", precio: 500 },
    { id: 42, categoria: "utiles", nombre: "Papel Glacé Lustre", imagen: "papel_glace_lustre.webp", precio: 400 },
    { id: 43, categoria: "utiles", nombre: "Papel Glacé Metalizado", imagen: "papel_glace_metalizado.webp", precio: 600 },
    { id: 44, categoria: "utiles", nombre: "Papel Súper Crepe", imagen: "papel_super_crepe.webp", precio: 900 },
    { id: 45, categoria: "utiles", nombre: "Papel Súper Crepe 1", imagen: "papel_super_crepe1.webp", precio: 900 },
    { id: 46, categoria: "utiles", nombre: "Pinceles", imagen: "pinceles.webp", precio: 500 },
    { id: 47, categoria: "utiles", nombre: "Plasticola", imagen: "plasticola.webp", precio: 700 },
    { id: 48, categoria: "utiles", nombre: "Reglas", imagen: "reglas.webp", precio: 550 },
    { id: 49, categoria: "utiles", nombre: "Reglas de Colores", imagen: "reglas_colores.webp", precio: 1200 },
    { id: 50, categoria: "utiles", nombre: "Reglas Transparentes", imagen: "reglas_transparentes.webp", precio: 400 },
    { id: 51, categoria: "utiles", nombre: "Resaltador Chato Amarillo", imagen: "resaltador_chato_amarillo.webp", precio: 1200 },
    { id: 52, categoria: "utiles", nombre: "Resaltador Fluo Azul", imagen: "resaltador_fluo_azul.webp", precio: 1400 },
    { id: 53, categoria: "utiles", nombre: "Resaltador Fluo High", imagen: "resaltador_fluo_hight.webp", precio: 1500 },
    { id: 54, categoria: "utiles", nombre: "Resaltador Sky", imagen: "resaltador_sky.webp", precio: 1800 },
    { id: 55, categoria: "utiles", nombre: "Resaltadores Fluo Chatos", imagen: "resaltadores_fluo_chatos.webp", precio: 1600 },
    { id: 56, categoria: "utiles", nombre: "Sacapuntas de Colores", imagen: "sacapuntas_colores.webp", precio: 200 },
    { id: 57, categoria: "utiles", nombre: "Sacapuntas de Metal", imagen: "sacapuntas_metal.webp", precio: 250 },
    { id: 58, categoria: "utiles", nombre: "Témperas", imagen: "temperas.webp", precio: 2500 },
    { id: 59, categoria: "utiles", nombre: "Tijeras", imagen: "tijeras.webp", precio: 1000 }
];

let carrito = JSON.parse(localStorage.getItem("salam_carrito")) || [];
let categoriaActual = "todos";
const numeroWhatsApp = "5491100000000"; // Reemplazá con tu número real

const contenedor = document.getElementById("productos");
const contador = document.getElementById("contador");
const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");


/* =====================================================
   CREAR MODAL DE IMAGEN Y PANEL DE CARRITO EN EL DOM
===================================================== */

const uiContainer = document.createElement("div");
uiContainer.innerHTML = `
    <!-- MODAL IMAGEN Y PRECIO -->
    <div id="modalProducto" class="modal-base">
        <div class="modal-fondo"></div>
        <div class="modal-contenido">
            <button type="button" class="modal-cerrar">×</button>
            <img id="modalImagen" src="" alt="">
            <div id="modalNombre"></div>
            <div id="modalPrecio"></div>
            <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
                <button id="modalAddBtn" class="btn-primary-custom">Agregar al carrito 🛒</button>
                <a id="modalWhatsApp" href="" target="_blank" class="btn-whatsapp-custom">Consultar individual</a>
            </div>
        </div>
    </div>

    <!-- BOTÓN FLOTANTE CARRITO -->
    <button id="btnAbrirCarrito" class="carrito-flotante">
        🛒 <span id="carritoBadge" class="carrito-badge">0</span>
    </button>

    <!-- PANEL LATERAL (DRAWER) DEL CARRITO -->
    <div id="carritoDrawer" class="carrito-drawer">
        <div class="carrito-header">
            <h3 class="text-white font-bold text-lg">Tu Combo Escolar</h3>
            <button id="btnCerrarCarrito" class="modal-cerrar" style="position:static;">×</button>
        </div>
        <div id="carritoItems" class="carrito-body">
            <!-- Items dinámicos -->
        </div>
        <div class="carrito-footer">
            <div class="carrito-total-container">
                <span>Total estimado:</span>
                <span id="carritoTotalPrecio">$0</span>
            </div>
            <button id="btnEnviarCombo" class="btn-enviar-combo">
                Enviar combo por WhatsApp 📲
            </button>
            <button id="btnVaciarCarrito" class="btn-vaciar">Vaciar carrito</button>
        </div>
    </div>
    <div id="carritoFondo" class="modal-fondo" style="display:none;"></div>
`;

document.body.appendChild(uiContainer);


/* =====================================================
   LÓGICA DEL CARRITO
===================================================== */

function guardarCarrito() {
    localStorage.setItem("salam_carrito", JSON.stringify(carrito));
    actualizarBadge();
}

function actualizarBadge() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    document.getElementById("carritoBadge").textContent = totalItems;
}

function calcularTotal() {
    return carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
}

function agregarAlCarrito(producto) {
    const index = carrito.findIndex(item => item.id === producto.id);
    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }
    guardarCarrito();
    renderCarritoItems();
    animarBadge();
}

function cambiarCantidad(id, delta) {
    const index = carrito.findIndex(item => item.id === id);
    if (index !== -1) {
        carrito[index].cantidad += delta;
        if (carrito[index].cantidad <= 0) {
            carrito.splice(index, 1);
        }
    }
    guardarCarrito();
    renderCarritoItems();
}

function animarBadge() {
    const badge = document.getElementById("carritoBadge");
    badge.classList.add("scale-125");
    setTimeout(() => badge.classList.remove("scale-125"), 200);
}

function renderCarritoItems() {
    const contenedorItems = document.getElementById("carritoItems");
    const totalPrecioSpan = document.getElementById("carritoTotalPrecio");
    contenedorItems.innerHTML = "";

    if (carrito.length === 0) {
        contenedorItems.innerHTML = `
            <div class="text-center text-gray-500 py-10">
                <p class="text-3xl mb-2">🛒</p>
                <p class="text-sm">Tu carrito está vacío.<br>Agregá productos para armar tu combo.</p>
            </div>
        `;
        totalPrecioSpan.textContent = "$0";
        return;
    }

    carrito.forEach(item => {
        const div = document.createElement("div");
        div.className = "carrito-item";
        div.innerHTML = `
            <img src="./static/img/${item.imagen}" alt="${item.nombre}">
            <div class="carrito-item-info">
                <h4>${item.nombre}</h4>
                <div class="carrito-item-precio">$${item.precio.toLocaleString()} c/u</div>
                <div class="carrito-controles">
                    <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span>${item.cantidad}</span>
                    <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
            </div>
            <div class="text-right">
                <span class="text-violet-300 font-bold text-sm">$${(item.precio * item.cantidad).toLocaleString()}</span>
            </div>
        `;
        contenedorItems.appendChild(div);
    });

    totalPrecioSpan.textContent = `$${calcularTotal().toLocaleString()}`;
}


/* =====================================================
   MODAL DE IMAGEN
===================================================== */

const modal = document.getElementById("modalProducto");
const modalImagen = document.getElementById("modalImagen");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const modalWhatsApp = document.getElementById("modalWhatsApp");
const modalAddBtn = document.getElementById("modalAddBtn");
let productoSeleccionado = null;

function abrirModal(producto) {
    productoSeleccionado = producto;
    modalImagen.src = `./static/img/${producto.imagen}`;
    modalImagen.alt = producto.nombre;
    modalNombre.textContent = producto.nombre;
    modalPrecio.textContent = `$${producto.precio.toLocaleString()}`;
    
    const mensaje = encodeURIComponent(`¡Hola! Me interesa consultar por el producto: *${producto.nombre}* (Precio: $${producto.precio.toLocaleString()})`);
    modalWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    modal.classList.add("mostrar");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    modal.classList.remove("mostrar");
    document.body.style.overflow = "";
}

modal.querySelector(".modal-cerrar").addEventListener("click", cerrarModal);
modal.querySelector(".modal-fondo").addEventListener("click", cerrarModal);

modalAddBtn.addEventListener("click", () => {
    if (productoSeleccionado) {
        agregarAlCarrito(productoSeleccionado);
        cerrarModal();
        abrirDrawer();
    }
});


/* =====================================================
   CONTROL DE PANEL LATERAL (DRAWER)
===================================================== */

const drawer = document.getElementById("carritoDrawer");
const drawerFondo = document.getElementById("carritoFondo");

function abrirDrawer() {
    renderCarritoItems();
    drawer.classList.add("abierto");
    drawerFondo.style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarDrawer() {
    drawer.classList.remove("abierto");
    drawerFondo.style.display = "none";
    document.body.style.overflow = "";
}

document.getElementById("btnAbrirCarrito").addEventListener("click", abrirDrawer);
document.getElementById("btnCerrarCarrito").addEventListener("click", cerrarDrawer);
drawerFondo.addEventListener("click", cerrarDrawer);

document.getElementById("btnVaciarCarrito").addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    renderCarritoItems();
});

document.getElementById("btnEnviarCombo").addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    let texto = "¡Hola! 👋 Vengo de la web de *Librería SALAM*. Quiero encargar el siguiente combo:\n\n";
    carrito.forEach((item, index) => {
        texto += `${index + 1}. *${item.nombre}* x ${item.cantidad} - ($${(item.precio * item.cantidad).toLocaleString()})\n`;
    });
    texto += `\n💰 *Total estimado: $${calcularTotal().toLocaleString()}*\n\n¿Me confirmás stock y total para pasar a retirar / transferir? ¡Gracias!`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
});


/* =====================================================
   RENDER DE PRODUCTOS EN CATÁLOGO
===================================================== */

function renderProductos() {
    const busqueda = buscador.value.toLowerCase().trim();

    const resultados = productos.filter(producto => {
        const coincideCategoria = categoriaActual === "todos" || producto.categoria === categoriaActual;
        const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda);
        return coincideCategoria && coincideBusqueda;
    });

    contenedor.innerHTML = "";
    contador.textContent = `${resultados.length} producto${resultados.length !== 1 ? "s" : ""}`;

    if (resultados.length === 0) {
        sinResultados.classList.remove("hidden");
        return;
    }

    sinResultados.classList.add("hidden");

    resultados.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto-card bg-gray-900 border border-gray-800 rounded-2xl p-3 md:p-4 group flex flex-col justify-between";
        tarjeta.style.animationDelay = `${index * 35}ms`;

        tarjeta.innerHTML = `
            <div>
                <div class="producto-imagen">
                    <img src="./static/img/${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                    <div class="producto-zoom">
                        <span>🔍</span>
                        <span>Ver y Agregar</span>
                    </div>
                </div>

                <div class="mt-4">
                    <div class="flex items-center justify-between gap-2">
                        <h3 class="text-white font-bold text-sm md:text-base truncate">
                            ${producto.nombre}
                        </h3>
                        <span class="producto-marca text-[9px] text-violet-400 font-semibold">SALAM</span>
                    </div>
                    <div class="mt-1 text-violet-400 font-extrabold text-sm md:text-base">
                        $${producto.precio.toLocaleString()}
                    </div>
                </div>
            </div>

            <button type="button" class="btn-agregar-rapido mt-3 w-full py-2 px-3 rounded-xl bg-violet-600/30 hover:bg-violet-600 text-violet-200 hover:text-white text-xs font-semibold transition border border-violet-500/30">
                + Agregar al combo
            </button>
        `;

        // Clic en la tarjeta abre el modal de zoom
        tarjeta.querySelector(".producto-imagen").addEventListener("click", (e) => {
            e.stopPropagation();
            abrirModal(producto);
        });
        
        tarjeta.querySelector("h3").addEventListener("click", (e) => {
            e.stopPropagation();
            abrirModal(producto);
        });

        // Clic directo en el botón de agregar rápido
        tarjeta.querySelector(".btn-agregar-rapido").addEventListener("click", (e) => {
            e.stopPropagation();
            agregarAlCarrito(producto);
            abrirDrawer();
        });

        contenedor.appendChild(tarjeta);
    });
}


/* =====================================================
   FILTROS Y BUSCADOR
===================================================== */

document.querySelectorAll(".filtro").forEach(boton => {
    boton.addEventListener("click", () => {
        categoriaActual = boton.dataset.categoria;
        document.querySelectorAll(".filtro").forEach(btn => btn.classList.remove("activo"));
        boton.classList.add("activo");
        renderProductos();
    });
});

buscador.addEventListener("input", renderProductos);


/* =====================================================
   INICIO
===================================================== */
actualizarBadge();
renderProductos();