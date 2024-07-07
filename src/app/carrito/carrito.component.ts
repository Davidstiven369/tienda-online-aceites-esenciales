import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/producto.model'; // Asegúrate de importar el modelo de Producto

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];

  constructor() { }

  ngOnInit(): void {
    // Supongamos que obtienes los productos del carrito de algún servicio o almacenamiento local
    // Aquí se simula una lista de productos
    this.productos = [
      { id: 1, nombre: 'Aceite Esencial de Lavanda', precio: 99.99, imagen: 'lavanda.jpg', cantidad: 2 },
      { id: 2, nombre: 'Aceite Esencial de Menta', precio: 129.99, imagen: 'menta.jpg', cantidad: 1 },
      { id: 3, nombre: 'Aceite Esencial de Eucalipto', precio: 89.99, imagen: 'eucalipto.jpg', cantidad: 3 },
      { id: 4, nombre: 'Aceite Esencial de Naranja', precio: 79.99, imagen: 'naranja.jpg', cantidad: 1 }
    ];
  }

  removeFromCart(producto: Producto): void {
    const index = this.productos.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.productos.splice(index, 1);
    }
  }

  calcularTotal(): string {
    const total = this.productos.reduce((total, p) => total + (p.precio * p.cantidad), 0);
    return total.toFixed(2);
  }
}
