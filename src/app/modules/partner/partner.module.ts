
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { MyCustomKendoModule } from 'src/app/shared/modules/my-custom-kendo-module/my-custom-kendo-module.module';
import { PartnerCustomerListComponent } from './partner-customer-list/partner-customer-list.component';



@NgModule({
  declarations: [
    PartnerCustomerListComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    MyCustomKendoModule,
  ],
  exports: [
    PartnerCustomerListComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PartnerModule { }
