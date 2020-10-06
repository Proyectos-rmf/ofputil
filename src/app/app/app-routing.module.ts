import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from '../core/home/home.component';
// import { NotFoundComponent } from '../core/not-found/not-found.component';
// import { LoginComponent } from '../core/admin/login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'empresas', loadChildren: () => import('../empresas/empresas.module').then(m => m.EmpresasModule) },
  // { path: 'login', component: LoginComponent },
  // { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
