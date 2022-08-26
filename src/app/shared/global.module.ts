import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PageFooterComponent } from '../components/page-footer/page-footer.component';
import { StorageService } from '../services/storage.service';
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../app.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ToggleMenuService } from '../services/toggle-menu/toggle-menu.service';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
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
    PageFooterComponent,
    AngularMaterialModule
  ],
  providers: [
    StorageService,
    ToggleMenuService
  ]
})
export class GlobalModule { }
