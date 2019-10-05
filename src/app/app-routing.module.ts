import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path:'login',component:LoginComponent
  },
  {
    path:'admin',component:AdminComponent,canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
