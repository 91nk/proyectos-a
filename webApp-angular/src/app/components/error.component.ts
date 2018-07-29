//1.genero mi componente.ts
import{Component}from '@angular/core';


//decorador
@Component({
  selector:'error',
  templateUrl: '../views/error.html'
})

//clase
export class ErrorComponent{
  public titulo:string;

  constructor(){
    this.titulo='Error, pagina no encontrada!.';
  }
  ngOnInit(){
    console.log("componente error.component.ts cargando");
  }
}
//sigue en error.html
