import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    { path: '', title:'Bem vindo(a)', component: HomeComponent },
    { path:'signup', title:'Cadastre-se', component: SignupComponent },
    { path:'signin', title:'Entre', component: SigninComponent }
];
