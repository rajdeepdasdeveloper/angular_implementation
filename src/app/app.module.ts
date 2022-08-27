import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, rootRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { GlobalModule } from './shared/global.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentExampleDialog } from './components/page-header/page-header.component';
import { DialogContentComponent, HttpRequestInterceptor } from './services/http-request-interceptors/http.interceptor';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    rootRoutingComponents, // Array of components associated with app-routing.model.ts
    DialogContentExampleDialog,
    DialogContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Import this in the module in which you want to use HttpClient
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    GlobalModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
