import { Routes } from '@angular/router';
import { ProductsComponent } from './Products/All_products/products.component';
import { HomeComponent } from './Home/home.component';
import { CartsComponent } from './carts/carts.component';
import { FotterComponent } from './shared/Components/fotter/fotter.component';

export const routes: Routes = [

    {
        path:'Home', component:HomeComponent,
    },
{
    path:'products', component:ProductsComponent,
},

{
    path:'Carts', component:CartsComponent,
},
{
    path:'Fotter', component:FotterComponent,
},

{
    path:'**', redirectTo:'Home',pathMatch:'full'
},

    
];
