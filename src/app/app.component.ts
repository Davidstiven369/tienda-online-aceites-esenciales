import { Component } from '@angular/core';
import { Producto } from './productos/producto.model'; // Asegúrate de importar el modelo de Producto

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 99.99, imagen: 'producto1.jpg', cantidad: 0 },
    { id: 2, nombre: 'Producto 2', precio: 129.99, imagen: 'producto2.jpg', cantidad: 0 },
    // Asegúrate de incluir cantidad y todas las propiedades requeridas según la interfaz Producto
  ];

  carrito: Producto[] = []; // Arreglo para almacenar los productos en el carrito

  agregarAlCarrito(producto: Producto): void {
    const index = this.carrito.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      this.carrito[index].cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }

    console.log('Producto agregado al carrito:', producto);
    console.log('Carrito actualizado:', this.carrito);
  }

  eliminarDelCarrito(producto: Producto): void {
    const index = this.carrito.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      if (this.carrito[index].cantidad > 1) {
        this.carrito[index].cantidad--;
      } else {
        this.carrito.splice(index, 1);
      }
    }

    console.log('Producto eliminado del carrito:', producto);
    console.log('Carrito actualizado:', this.carrito);
  }
}
