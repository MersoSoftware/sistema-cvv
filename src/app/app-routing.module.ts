import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './componentes/home/home.component';
import { AuthGuard } from './core/share/guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  {
    path:'',
    children:[
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'login', component:LoginComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
