import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"home",component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:"login",component:LoginComponent},
  {path:'',redirectTo:'/login' ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
