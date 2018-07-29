//1.configuro los modulos de rutas a exportar y las configuracion de rutas;

import{ ModuleWithProviders} from '@angular/core';
import{ Routes, RouterModule} from '@angular/router';
//componentes propios
import {HomeComponent} from './components/home.component';
import {ErrorComponent} from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import{ProductoAddComponent} from './components/producto-add.component';
import {ProductoDetailComponent} from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
//configuracion de rutas
const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'productos', component:ProductosListComponent},
  {path:'crear-producto', component:ProductoAddComponent},
  {path:'producto/:id', component:ProductoDetailComponent},
  {path:'editar-producto/:id', component:ProductoEditComponent},
  {path:'**', component:ErrorComponent} //3.cargo el componente en la configuracion de ruta, sigue en module.ts
];
//Objetos a exportar en app.module.ts
export const appRoutingProviders:any[] = []; //array de providers;
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes) //objeto de tipo modulo
//sigue en app.modules.ts
