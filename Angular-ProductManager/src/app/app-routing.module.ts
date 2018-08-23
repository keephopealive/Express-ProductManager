import { ProductHomeComponent } from './product-home/product-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
    { path: 'products/edit/:id', component: ProductEditComponent },
    { path: 'products' , component: ProductListComponent },
    { path: '', pathMatch: 'full', component: ProductHomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
