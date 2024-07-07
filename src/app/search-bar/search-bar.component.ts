import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  searchTerm: string = '';

  buscarProductos() {
    this.searchEvent.emit(this.searchTerm.toLowerCase());
  }
}
