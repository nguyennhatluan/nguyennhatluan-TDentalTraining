import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { LoadingComponent } from './loading/loading.component';
import { NavSidebarService } from '../data/services/nav-sidebar.service';
import { AppLoadingService } from '../data/services/app-loading.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LayoutHeaderComponent, LayoutSidebarComponent, LoadingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FlexLayoutModule

  ],
  exports: [
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    LoadingComponent
  ],
  providers: [NavSidebarService,AppLoadingService]
})
export class LayoutModule { }
