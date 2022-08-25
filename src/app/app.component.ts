import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { ToggleMenuService } from './services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-pwa';
  @ViewChild('drawer') drawer!: MatSidenav;
  
  constructor(
    private toggleMenuService : ToggleMenuService,
    //private translateService : TranslateService
  ){
    // Stand Alone Translate Service
    // this.translateService.setDefaultLang('en');
    // this.translateService.use(localStorage.getItem('lang') || 'en');
    
  }

  ngAfterViewInit() {
    this.toggleMenuService.toggleMenuState$.subscribe(response => {
      if(response || !response){
        this.drawer.toggle();
      }
    });
  }
  

}
