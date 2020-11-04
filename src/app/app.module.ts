import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app/material-module';

/* Importar FireBase */
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { NavComponent } from './components/nav/nav.component';
import { EmpresaModule } from './components/empresa/empresa.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    EmpresaModule
  ],
  providers: [ { provide: BUCKET, useValue: 'gs://ofpempresas.appspot.com' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
