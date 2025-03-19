import { Routes } from '@angular/router';
import { ProductsComponent } from './Products/All_products/products.component';
import { HomeComponent } from './Home/home.component';
import { CartsComponent } from './carts/carts.component';
import { FotterComponent } from './shared/Components/fotter/fotter.component';
import { SignComponent } from './sign/sign.component';
import { LayoutComponent } from './layout/layout.component';
import { guardGuard } from './guard/guard.guard';

export const routes: Routes = [

    {
        path:'', 
        redirectTo:'login',
        pathMatch:'full'
    },
{
    path:'login',
    component:SignComponent,
},
{
path:'',
component:LayoutComponent,
children:[
    {
        path:'Home', component:HomeComponent,
        canActivate:[guardGuard]
    },
{
    path:'products', component:ProductsComponent,
    canActivate:[guardGuard]
},

{
    path:'Carts', component:CartsComponent,
    canActivate:[guardGuard]
},
{
    path:'Fotter', component:FotterComponent,
    canActivate:[guardGuard]
},

]
},


    
];
