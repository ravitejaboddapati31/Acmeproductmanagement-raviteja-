import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductComponent } from './products/product.component';
// import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    // { path:'products',component:ProductComponent},
    // {path:'welcomecomponent',component:WelcomeComponent},
    // {path:'',redirectTo:'welcome',pathMatch:'full'},
    // {path:'**',redirectTo:'welcome',pathMatch:'full'}
    

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
