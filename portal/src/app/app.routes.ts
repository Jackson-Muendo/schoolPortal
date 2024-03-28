import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmarksComponent } from './addmarks/addmarks.component';
import { ViewstudentsComponent } from './viewstudents/viewstudents.component';
import { TranscriptsComponent } from './transcripts/transcripts.component';

export const routes: Routes = [
    {path:'',component: DashboardComponent},
    {path:'header',component: HeaderComponent},
    {path:'login',component: LoginComponent},
    {path:'footer',component: FooterComponent},
    {path:'addstudents',component: AddstudentsComponent},
    {path:'addmarks',component: AddmarksComponent},
    {path:'view-students',component: ViewstudentsComponent},
    {path:'get-Transcripts',component: TranscriptsComponent},
    
    
];
