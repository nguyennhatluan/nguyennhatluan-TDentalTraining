import { Component, OnInit } from '@angular/core';
import { NavSidebarService } from 'src/app/data/service/nav-sidebar.service';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent implements OnInit {

  constructor(
    private sidebarService:NavSidebarService,
    public authService:AuthService
    ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sidebarService.toggle();
  }

  removeSampleData(){

  }

  editProfile(infor:any){

  }

  changePassword(){

  }

  logout(){

  }
}
