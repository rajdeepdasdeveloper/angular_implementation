import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../global-components/page-header/page-header.component';
import { PageFooterComponent } from '../global-components/page-footer/page-footer.component';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
