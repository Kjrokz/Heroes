import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-targeta",
  templateUrl: "./heroe-targeta.component.html",
  styleUrls: ["./heroe-targeta.component.css"]
})
export class HeroeTargetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    console.log(this.indice);
    this.router.navigate(["/heroe", this.indice]);
    /* this.heroeSeleccionado.emit(this.indice); */
  }
}
