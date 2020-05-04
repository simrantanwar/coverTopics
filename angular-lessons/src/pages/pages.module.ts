import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { ProductComponent } from './product/product.component';
import {MatTableModule} from '@angular/material/table';
import { Routes,RouterModule } from '@angular/router';
import { SharedControlsModule } from 'src/shared controls/shared-controls.module';


const routes: Routes = [
  // { path: 'users', loadChildren: './pages/pages.module#PagesModule' } // old method
  {path:'users', component:UsersComponent},
  {path:'products', component:ProductComponent},
];


@NgModule({
  declarations: [UsersComponent, ProductComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes),
    
  ]
})
export class PagesModule { }
