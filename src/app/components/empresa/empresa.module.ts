import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { MaterialModule } from 'src/app/app/material-module';
import { RegistrarComponent } from './registrar/registrar.component';
import { ElegirComponent } from './elegir/elegir.component';
import { LlenarComponent } from './registrar/llenar/llenar.component';


@NgModule({
  declarations: [EmpresaComponent, RegistrarComponent, ElegirComponent, LlenarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
