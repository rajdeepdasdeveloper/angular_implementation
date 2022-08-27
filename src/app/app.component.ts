import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { HttpService } from './services/http/http.service';
//import { TranslateService } from '@ngx-translate/core';
import { ToggleMenuService } from './services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit ,AfterViewInit {
  title = 'angular-pwa';
  @ViewChild('drawer') drawer!: MatSidenav;
  
  constructor(
    private toggleMenuService : ToggleMenuService,
    private http : HttpService
    //private translateService : TranslateService
  ){
    // Stand Alone Translate Service
    // this.translateService.setDefaultLang('en');
    // this.translateService.use(localStorage.getItem('lang') || 'en');
  }
  ngOnInit(): void {
    // this.http.httpRequest('GET', "https://catfact.ninja/fact").subscribe(response => {
    //   console.log(response);
    // }, err => {
    //   console.log(err);
    // });

    // this.http.httpRequest('GET', "https://catfact.ninja/fact").subscribe(response => {
    //   next: (response: any) =>  {
    //     console.log(response);
    //   },
    //   complete: () => {},
    //   error: () => {}
    // });
  }

  ngAfterViewInit() {
    this.toggleMenuService.toggleMenuState$.subscribe(response => {
      if(response || !response){
        this.drawer.toggle();
      }
    });
  }
  

}
