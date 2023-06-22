import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CompteComponent } from './compte/compte.component';
import { PanierComponent } from './panier/panier.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';

const routes: Routes = [
  {
    path: 'register', 
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'compte',
    component: CompteComponent
  },
  {
    path: 'panier',
    component: PanierComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'apropos',
    component: AproposComponent
  },
  // {
  //   path: 'paiement',
  //   component: PaiementComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
