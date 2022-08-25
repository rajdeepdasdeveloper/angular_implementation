import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule, pagesRoutingComponents } from './home-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './../../app.module';
import { HttpClient } from '@angular/common/http';
import { GlobalModule } from './../../shared/global.module';

@NgModule({
  declarations: [
    pagesRoutingComponents,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    GlobalModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
