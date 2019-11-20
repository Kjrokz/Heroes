import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HeroesService, Heroe } from "../../servicios /heroes.service";
import { BusquedaComponent } from "../busqueda/busqueda.component";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styles: []
})
export class HeroeComponent {
  heroe: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private __heroesService: HeroesService
  ) {
    this.activatedRoute.params.subscribe(params => {
      /* console.log(params["id"]); */
      this.heroe = this.__heroesService.getHeroe(params["id"]);

      console.log(this.heroe);
    });
  }
}
