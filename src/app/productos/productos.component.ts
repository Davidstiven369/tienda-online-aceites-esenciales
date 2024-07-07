import { Component, OnInit } from '@angular/core';
import { Producto } from './producto.model'; // Asegúrate de importar el modelo de Producto

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [
    { id: 1, nombre: 'Aceite Esencial de Lavanda', precio: 99.99, imagen: 'lavanda.jpg', cantidad: 0 },
    { id: 2, nombre: 'Aceite Esencial de Menta', precio: 129.99, imagen: 'menta.jpg', cantidad: 0 },
    { id: 3, nombre: 'Aceite Esencial de Eucalipto', precio: 159.99, imagen: 'eucalipto.jpg', cantidad: 0 },
    { id: 4, nombre: 'Aceite Esencial de Limón', precio: 89.99, imagen: 'limon.jpg', cantidad: 0 },
    { id: 5, nombre: 'Aceite Esencial de Árbol de Té', precio: 199.99, imagen: 'arbol_de_te.jpg', cantidad: 0 },
    { id: 6, nombre: 'Aceite Esencial de Romero', precio: 149.99, imagen: 'romero.jpg', cantidad: 0 },
    { id: 7, nombre: 'Aceite Esencial de Naranja', precio: 179.99, imagen: 'naranja.jpg', cantidad: 0 },
    { id: 8, nombre: 'Aceite Esencial de Incienso', precio: 109.99, imagen: 'incienso.jpg', cantidad: 0 },
    { id: 9, nombre: 'Aceite Esencial de Manzanilla', precio: 139.99, imagen: 'manzanilla.jpg', cantidad: 0 },
    { id: 10, nombre: 'Aceite Esencial de Ylang Ylang', precio: 159.99, imagen: 'ylang_ylang.jpg', cantidad: 0 },
    { id: 11, nombre: 'Aceite Esencial de Cedro', precio: 119.99, imagen: 'cedro.jpg', cantidad: 0 },
    { id: 12, nombre: 'Aceite Esencial de Bergamota', precio: 89.99, imagen: 'bergamota.jpg', cantidad: 0 },
    { id: 13, nombre: 'Aceite Esencial de Sándalo', precio: 189.99, imagen: 'lavanda.jpg', cantidad: 0 },
    { id: 14, nombre: 'Aceite Esencial de Jengibre', precio: 129.99, imagen: 'menta.jpg', cantidad: 0 },
    { id: 15, nombre: 'Aceite Esencial de Mirra', precio: 209.99, imagen: 'eucalipto.jpg', cantidad: 0 },
    { id: 16, nombre: 'Aceite Esencial de Albahaca', precio: 99.99, imagen: 'limon.jpg', cantidad: 0 },
    { id: 17, nombre: 'Aceite Esencial de Salvia', precio: 149.99, imagen: 'arbol_de_te.jpg', cantidad: 0 },
    { id: 18, nombre: 'Aceite Esencial de Menta Piperita', precio: 119.99, imagen: 'romero.jpg', cantidad: 0 },
    { id: 19, nombre: 'Aceite Esencial de Citronela', precio: 89.99, imagen: 'naranja.jpg', cantidad: 0 },
    { id: 20, nombre: 'Aceite Esencial de Clavo', precio: 109.99, imagen: 'incienso.jpg', cantidad: 0 },
    { id: 21, nombre: 'Aceite Esencial de Pachuli', precio: 179.99, imagen: 'manzanilla.jpg', cantidad: 0 },
    { id: 22, nombre: 'Aceite Esencial de Tomillo', precio: 159.99, imagen: 'ylang_ylang.jpg', cantidad: 0 },
    { id: 23, nombre: 'Aceite Esencial de Rosa', precio: 229.99, imagen: 'cedro.jpg', cantidad: 0 },
    { id: 24, nombre: 'Aceite Esencial de Verbena', precio: 139.99, imagen: 'bergamota.jpg', cantidad: 0 },
    { id: 25, nombre: 'Aceite Esencial de Geranio', precio: 129.99, imagen: 'lavanda.jpg', cantidad: 0 },
    { id: 26, nombre: 'Aceite Esencial de Pino', precio: 99.99, imagen: 'menta.jpg', cantidad: 0 },
    { id: 27, nombre: 'Aceite Esencial de Hinojo', precio: 149.99, imagen: 'eucalipto.jpg', cantidad: 0 },
    { id: 28, nombre: 'Aceite Esencial de Ciprés', precio: 119.99, imagen: 'limon.jpg', cantidad: 0 },
    { id: 29, nombre: 'Aceite Esencial de Enebro', precio: 109.99, imagen: 'arbol_de_te.jpg', cantidad: 0 },
    { id: 30, nombre: 'Aceite Esencial de Anís Estrellado', precio: 139.99, imagen: 'romero.jpg', cantidad: 0 },
    { id: 31, nombre: 'Aceite Esencial de Canela', precio: 129.99, imagen: 'naranja.jpg', cantidad: 0 },
    { id: 32, nombre: 'Aceite Esencial de Laurel', precio: 149.99, imagen: 'incienso.jpg', cantidad: 0 },
    { id: 33, nombre: 'Aceite Esencial de Melissa', precio: 169.99, imagen: 'manzanilla.jpg', cantidad: 0 },
    { id: 34, nombre: 'Aceite Esencial de Mandarina', precio: 89.99, imagen: 'ylang_ylang.jpg', cantidad: 0 },
    { id: 35, nombre: 'Aceite Esencial de Limón Verde', precio: 99.99, imagen: 'cedro.jpg', cantidad: 0 },
    { id: 36, nombre: 'Aceite Esencial de Pomelo', precio: 119.99, imagen: 'bergamota.jpg', cantidad: 0 },
    { id: 37, nombre: 'Aceite Esencial de Nuez Moscada', precio: 139.99, imagen: 'lavanda.jpg', cantidad: 0 },
    { id: 38, nombre: 'Aceite Esencial de Orégano', precio: 159.99, imagen: 'menta.jpg', cantidad: 0 },
    { id: 39, nombre: 'Aceite Esencial de Estragón', precio: 129.99, imagen: 'eucalipto.jpg', cantidad: 0 },
    { id: 40, nombre: 'Aceite Esencial de Palo Santo', precio: 189.99, imagen: 'limon.jpg', cantidad: 0 },
    { id: 41, nombre: 'Aceite Esencial de Valeriana', precio: 199.99, imagen: 'arbol_de_te.jpg', cantidad: 0 },
    { id: 42, nombre: 'Aceite Esencial de Cedrón', precio: 119.99, imagen: 'romero.jpg', cantidad: 0 },
    { id: 43, nombre: 'Aceite Esencial de Angélica', precio: 139.99, imagen: 'naranja.jpg', cantidad: 0 },
    { id: 44, nombre: 'Aceite Esencial de Ajedrea', precio: 149.99, imagen: 'incienso.jpg', cantidad: 0 },
    { id: 45, nombre: 'Aceite Esencial de Abeto', precio: 109.99, imagen: 'manzanilla.jpg', cantidad: 0 },
    { id: 46, nombre: 'Aceite Esencial de Cedrón Peruano', precio: 129.99, imagen: 'ylang_ylang.jpg', cantidad: 0 },
    { id: 47, nombre: 'Aceite Esencial de Hierba Luisa', precio: 159.99, imagen: 'cedro.jpg', cantidad: 0 },
    { id: 48, nombre: 'Aceite Esencial de Gaulteria', precio: 189.99, imagen: 'bergamota.jpg', cantidad: 0 },
    { id: 49, nombre: 'Aceite Esencial de Cananga', precio: 169.99, imagen: 'lavanda.jpg', cantidad: 0 },
    { id: 50, nombre: 'Aceite Esencial de Artemisa', precio: 179.99, imagen: 'menta.jpg', cantidad: 0 },
    { id: 51, nombre: 'Aceite Esencial de Vetiver', precio: 209.99, imagen: 'eucalipto.jpg', cantidad: 0 },
    { id: 52, nombre: 'Aceite Esencial de Lúpulo', precio: 119.99, imagen: 'limon.jpg', cantidad: 0 },
    { id: 53, nombre: 'Aceite Esencial de Borraja', precio: 139.99, imagen: 'arbol_de_te.jpg', cantidad: 0 },
    { id: 54, nombre: 'Aceite Esencial de Jazmín', precio: 229.99, imagen: 'romero.jpg', cantidad: 0 },
    { id: 55, nombre: 'Aceite Esencial de Labanda', precio: 159.99, imagen: 'naranja.jpg', cantidad: 0 },
    { id: 56, nombre: 'Aceite Esencial de Verbena Exótica', precio: 249.99, imagen: 'incienso.jpg', cantidad: 0 },
    { id: 57, nombre: 'Aceite Esencial de Ajenjo', precio: 199.99, imagen: 'manzanilla.jpg', cantidad: 0 },
    { id: 58, nombre: 'Aceite Esencial de Cajeput', precio: 99.99, imagen: 'ylang_ylang.jpg', cantidad: 0 },
    { id: 59, nombre: 'Aceite Esencial de Caléndula', precio: 109.99, imagen: 'cedro.jpg', cantidad: 0 },
    { id: 60, nombre: 'Aceite Esencial de Camomila', precio: 189.99, imagen: 'bergamota.jpg', cantidad: 0 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(producto: Producto): void {
    producto.cantidad++;
  }

  removeFromCart(producto: Producto): void {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }
}
