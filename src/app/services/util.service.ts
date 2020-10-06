import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private apuntador = new BehaviorSubject<any>(null);
  ApuntadorAction$ = this.apuntador.asObservable();
  public Error;

  constructor() { }

  Variables(value: any): void {
    this.apuntador.next(value);
  }

  msjwsal(cual: string, icono?: any, titulo?: any, op1?: any, op2?: any, op3?: any, op4?: any, entra?: boolean): void {
    switch (cual) {
      case 'carga':
        swal.showLoading();
        break;

        case 'fire2':
          if (entra) {
            swal.fire({
              footer: 'Registar Empresa',
              icon: icono,
              title: titulo,
              allowOutsideClick: op1,
              allowEscapeKey: op2,
              showConfirmButton: op3,
              timer: op4
            });
          }
          break;


          case 'fire':
          if (entra) {
            swal.fire({
               icon: icono,
               title: titulo,
               allowOutsideClick: op1,
               allowEscapeKey: op2,
               showConfirmButton: op3,
               timer: op4
            });
          }
          break;

      default:
        break;
    }
  }

  Errores(Errors: string, tipo: string): string {
    this.Error = Errors;

    switch (tipo) {
      case 'required':
        this.Error = this.Error?.required;
        break;

      case 'minlength':
        this.Error = this.Error?.minlength;
        break;

      case 'minlength?':
        this.Error = this.Error?.minlength;
        this.Error = this.Error?.requiredLength;
        break;

      case 'pattern':
        this.Error = this.Error?.pattern;
        break;
    }
    return this.Error;
  }
}
