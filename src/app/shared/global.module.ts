import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../global-components/page-header/page-header.component';
import { PageFooterComponent } from '../global-components/page-footer/page-footer.component';
import { StorageService } from '../services/storage.service';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  providers: [
    StorageService
  ]
})
export class GlobalModule { }
