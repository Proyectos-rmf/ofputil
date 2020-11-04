import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UtilService } from 'src/app/services/util.service';
import { CrudService } from 'src/app/services/empresas.service';
import { XlsService } from 'src/app/services/xls.service';

@Component({
  selector: 'app-llenar',
  templateUrl: './llenar.component.html',
  styleUrls: ['./llenar.component.scss']
})
export class LlenarComponent implements OnInit {
  @Input() archivo: any;
  empresaForm: FormGroup;

  public datos: any[][];
  public XLSarr$ = this.XLSX.XLSAction$;
  public cargar = false;
  public desplegar = true;
  public mostrar = true;

  constructor(public XLSX: XlsService, public UTIL: UtilService,
              public formBuilder: FormBuilder, public crudApi: CrudService) {}

  ngOnInit(): void {
    console.log('Entra');

    if (this.archivo) { this.onFileChange(this.archivo); }

    this.empresaForm = this.formBuilder.group({
      nombre_Emp: ['', [Validators.required, Validators.minLength(6)]],
      calle_Emp: ['', [Validators.required, Validators.minLength(3)]],
      colonia_Emp: ['', [Validators.required, Validators.minLength(3)]],
      ciudad_Emp: ['', [Validators.required, Validators.minLength(3)]],
      estado_Emp: ['', [Validators.required, Validators.minLength(3)]],
      cp_Emp: ['', [Validators.pattern('^[0-9]*$') ] ],
      telefono_Emp: ['', [Validators.minLength(5), Validators.pattern('^[0-9]*$') ] ],
    });

  }

  ponerdatos(informa: any[][]): void {
    const empresas = {
      nombre_Emp: (informa ? informa[1][0] : ''),
      calle_Emp: (informa ? informa[1][1] : ''),
      colonia_Emp: (informa ? informa[1][2] : ''),
      ciudad_Emp: (informa ? informa[1][4] : ''),
      estado_Emp: (informa ? informa[1][5] : ''),
      cp_Emp: (informa ? informa[1][3] : ''),
      telefono_Emp: (informa ? informa[1][6] : '')
    };

    this.empresaForm.setValue(empresas);
    console.log('Empresa', this.empresaForm.controls.nombre_Emp.value);
  }

  getErrorMessage(campo: any): string {
    return this.UTIL.getErrorMessage(campo);
  }

  onFileChange(evt: any): void {
    this.XLSX.XLStoJSON(evt).subscribe(datos => {
      setTimeout(() => {
        this.XLSarr$.subscribe(res => { this.datos = res; });
//        this.cargar = true;
//        this.desplegar = false;
        this.ponerdatos(this.datos);
      }, 100);
    });
  }

}
