import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RUtas

import { APP_ROUTING } from './app.routes';

// componentes
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

// Servicios
import { HeroesService } from './servicios /heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeTargetaComponent } from './components/heroe-targeta/heroe-targeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BusquedaComponent,
    HeroeTargetaComponent
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
