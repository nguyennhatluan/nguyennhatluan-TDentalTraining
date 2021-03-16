import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { NavSidebarService } from '../data/service/nav-sidebar.service';
import { AppLoadingService } from '../data/service/app-loading.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutHeaderComponent, LayoutSidebarComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

  ],
  exports: [
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LoadingComponent
  ],
  providers: [NavSidebarService,AppLoadingService]
})
export class LayoutModule { }
