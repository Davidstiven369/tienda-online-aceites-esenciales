import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterProductosPipe } from './filter-productos.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    CarritoComponent,
    SearchBarComponent,
    NavbarComponent,
    FilterProductosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
