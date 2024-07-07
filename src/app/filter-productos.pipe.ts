import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './productos/producto.model'; // Asegúrate de importar el modelo Producto si lo tienes definido

@Pipe({
  name: 'filterProductos'
})
export class FilterProductosPipe implements PipeTransform {
  transform(productos: Producto[], searchTerm: string): Producto[] {
    if (!productos || !searchTerm) {
      return productos;
    }

    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
