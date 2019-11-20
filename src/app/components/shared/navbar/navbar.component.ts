import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../../servicios /heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private _heroesService: HeroesService, private router: Router) {}

  ngOnInit() {}

  buscarHeroe(termino: string) {
    //console.log(termino);
    if (termino.length < 1) {
      return;
    }
    this.router.navigate(["/busqueda", termino]);
  }

  /* cambiarColor() {

    var checkBox = document.getElementById("customSwitch1");
    if(checkBox.checked == true ){}
  } */
}
