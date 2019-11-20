import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../servicios /heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  busqueda: Heroe[] = [];
  termino: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private __heroesService: HeroesService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(valor => {
      this.termino = valor["termino"];
      this.busqueda = this.__heroesService.buscarHeroes(valor["termino"]);
      console.log(this.busqueda);
    });
  }

  /*     verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  } */
}
