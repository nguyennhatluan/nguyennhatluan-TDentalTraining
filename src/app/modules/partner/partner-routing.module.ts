import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartnerCustomerListComponent } from './partner-customer-list/partner-customer-list.component';

const routes: Routes = [
  {
    path: 'customers',
    component: PartnerCustomerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
