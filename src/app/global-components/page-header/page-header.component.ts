import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { appConstant } from 'src/app/app-constants';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  showLogOutButton = false;
  constructor(
    private translateService : TranslateService,
    private router: Router) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {  
          if(event.url == '/signin' || event.url == '/signup'){
            this.showLogOutButton = false;
          } else {
            this.showLogOutButton = true;
          }
        }
      })
    

    this.translateService.setDefaultLang(localStorage.getItem('lang') || 'en');
  }

  public applicationName = appConstant.applicationName;
  public selectedLanguage = localStorage.getItem('lang') || 'en';

  ngOnInit(): void {}

  onLangChange(language: any) : void{
    localStorage.setItem('lang', language.target.value);
    this.selectedLanguage = language.target.value;
    this.translateService.use(this.selectedLanguage);
  }

  logout(){
    localStorage.removeItem('accessToken');
    this.showLogOutButton = false;
    this.router.navigate(['/signin']);
  }

}
