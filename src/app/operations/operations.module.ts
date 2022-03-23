import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OperationComponent } from './operation/operation.component';



@NgModule({
  declarations: [
    OperationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class OperationsModule { }
