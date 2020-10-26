import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  private empresaColeccion: any;
  private tablas: any;

  constructor(private db: AngularFirestore) { }

  // Crear Empresa
  creaEmpresa(empresa: any, coleccion: string){
    return this.db.collection(coleccion).add(empresa);
  }

  // Obtener todas las empresas
  TodasEmpresas(coleccion: string) {
    return this.db.collection(coleccion).snapshotChanges();
}

//  todasEmpresas(coleccion: string) {
//    this.empresaColeccion = this.db.collection(coleccion);
//   return this.tablas = this.empresaColeccion.snapshotChanges()
//      .pipe(map(changes => {
//        return changes.map(action => {
//          const data = action.payload.doc.data();
//          data.id = action.payload.doc.id;
//          return data;
//      });
//    }));
//  }

  // getTabla(orden: string, coleccion) {
  //  this.dataApi.getAllTabla(orden,this.tablaService.config.tipo,coleccion).subscribe(tablas => {
  //    this.tablas = tablas;
  //    this.tablaService.config.totalItems = this.tablas.length;
  //  });
  // }

}
