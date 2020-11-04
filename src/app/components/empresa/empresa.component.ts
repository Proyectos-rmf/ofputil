import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from '../../services/util.service';
import { Empresa } from '../../models/empresa';
import { CrudService } from '../../services/empresas.service';

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
        // this.router.navigate(['empresas/buscar']);
      } else {
        this.noactivo = true;
        console.log('Sin EMPRESAS');
          // this.router.navigate(['empresa/empresa']);
        }
    });
  }

}
