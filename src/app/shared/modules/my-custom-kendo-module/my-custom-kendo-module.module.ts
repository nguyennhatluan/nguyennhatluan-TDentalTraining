import { GridModule } from '@progress/kendo-angular-grid';
import { NgModule } from '@angular/core';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { NumericTextBoxModule } from '@progress/kendo-angular-inputs';
import { DatePickerModule } from '@progress/kendo-angular-dateinputs';
import { DateTimePickerModule } from '@progress/kendo-angular-dateinputs';
import { TimePickerModule } from '@progress/kendo-angular-dateinputs';
import { ComboBoxModule, DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { ChartModule } from '@progress/kendo-angular-charts';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ExcelModule, PDFModule } from '@progress/kendo-angular-grid';

const kendo = [
    GridModule,
    NumericTextBoxModule,
    DatePickerModule,
    DateTimePickerModule,
    TimePickerModule,
    ComboBoxModule,
    MultiSelectModule,
    ChartModule,
    TreeViewModule,
    NotificationModule,
    ExcelModule,
    PDFModule,
    DropDownListModule
];

@NgModule({
    exports: [
        ...kendo
    ],
    imports: [
        ...kendo
    ]
})
export class MyCustomKendoModule { }
