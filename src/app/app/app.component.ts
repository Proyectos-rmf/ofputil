import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from '../services/util.service';
import { Empresa } from '../models/empresa';
// import { CrudService } from '../empresas/empresas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public Empresamodal: Empresa[];

  // private crudApi: CrudService,
  constructor(private router: Router, private UTIL: UtilService) { }

  ngOnInit(): void {
   // this.listaEmpresas('empresa');
  }

  // listaEmpresas(coleccion: string): void {
  //   this.crudApi.TodasEmpresas(coleccion).subscribe(data => {
  //     this.Empresamodal = data.map(e => {
  //       return {
  //         id: e.payload.doc.id,
  //         elegir: false,
  //         ...e.payload.doc.data() as Empresa
  //       };
  //     });

  //     if (this.Empresamodal[0]?.id) {
  //       this.UTIL.Variables(this.Empresamodal);
  //       this.router.navigate(['empresas/buscar']);
  //     } else {
  //         console.log('LOGIN');
  //         this.router.navigate(['empresas/empresa']);
  //       }
  //   });
  // }
}
