import { Component } from '@angular/core';

@Component({
  selector:'home',
  templateUrl:'../views/home.html'
})

export class HomeComponent {
  public titulo: string;
  constructor(){
    this.titulo='Pagina Principal';
  }
  ngOnInit(){
    console.log('La pagina fué cargada correctamente!');
  }
}
