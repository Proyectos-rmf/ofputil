import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
  llenar = false;
  @ViewChild('fileInput') fileInput;

  file: File | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  llenado(): void {
    this.llenar = true;
  }
  onClickFileInputButton(): void {
    this.fileInput.nativeElement.click();
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    this.file = files[0];
    console.log(this.file.name);
  }

  onFileChange(evt: any): void {
    // this.XLSX.XLStoJSON(evt).subscribe(datos => {
    //   setTimeout(() => {
    //     this.XLSarr$.subscribe(res => { this.datos = res; });
    //     this.UTIL.Variables(this.datos);
    //     this.cargar = true;
    //     this.desplegar = false;
    //   }, 100);
    // });
  }

}
