import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:'',component: DashboardComponent},
    {path:'header',component: HeaderComponent},
    {path:'login',component: LoginComponent},
    {path:'footer',component: FooterComponent},
    {path:'addstudents',component: AddstudentsComponent},
    
    
];
