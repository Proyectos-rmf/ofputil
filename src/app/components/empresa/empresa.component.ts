import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from '../../services/util.service';
import { CrudService } from '../../services/empresas.service';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styles: [
  ]
})
export class EmpresaComponent implements OnInit {
  Empresamodal: Empresa[];
  noactivo = false;

  constructor(private crudApi: CrudService, private router: Router, private UTIL: UtilService) { }

  ngOnInit(): void {
    this.listaEmpresas('empresa');
  }

  listaEmpresas(coleccion: string): void {
    const espera = this.UTIL.start();

    this.crudApi.TodasEmpresas(coleccion).subscribe(data => {
      this.Empresamodal = data.map(e => {
        return {
          id: e.payload.doc.id,
          elegir: false,
          ...e.payload.doc.data() as Empresa
        };
      });

      if (this.Empresamodal[0]?.id) {
        this.noactivo = false;
        this.UTIL.Variables(this.Empresamodal);
      } else {
        this.noactivo = true;
        console.log('Sin EMPRESAS');
        }

      this.UTIL.stop(espera);
    }, (error) => {
        this.UTIL.stop(espera);
        this.UTIL.openDialog('red', 'clear', 'La Base de datos no esta Disponible', 3000);
        this.router.navigate(['']);
    });
  }

}
