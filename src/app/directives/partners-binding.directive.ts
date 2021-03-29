import { Directive, OnDestroy, OnInit } from '@angular/core';
import { DataBindingDirective, GridComponent } from '@progress/kendo-angular-grid';
import { PartnersService } from '../data/services/partners.service';
@Directive({
  selector: '[appPartnersBinding]'
})
export class PartnersBindingDirective extends DataBindingDirective implements OnInit, OnDestroy {

  constructor(private partnersService: PartnersService, grid: GridComponent) {
    super(grid);
}

}
