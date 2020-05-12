import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // { path: 'users', loadChildren: './pages/pages.module#PagesModule' } // old method
  { path: '', redirectTo: 'payments', pathMatch: 'full' },
  { path: 'payments', component: PaymentsComponent},

];

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FinanceModule { }
