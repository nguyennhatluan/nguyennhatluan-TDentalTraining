import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { MyCustomKendoModule } from 'src/app/shared/modules/my-custom-kendo-module/my-custom-kendo-module.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    MyCustomKendoModule
  ]
})
export class PartnerModule { }
