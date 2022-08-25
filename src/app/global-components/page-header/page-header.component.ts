import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { appConstant } from 'src/app/app-constants';
import { ToggleMenuService } from 'src/app/services/toggle-menu/toggle-menu.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit, AfterViewInit {
  showLogOutButton = false;
  constructor(
    private translateService : TranslateService,
    public dialog: MatDialog,
    private router: Router,
    private toggleMenuService : ToggleMenuService 
  ) {
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

  public sideMenuOpen : boolean = false;
  ngAfterViewInit(): void {
    this.toggleMenuService.toggleMenuState$.subscribe(response => {
      if(response){
        this.sideMenuOpen = true;
      } else {
        this.sideMenuOpen = false;
      }
    })
  }

  toggleMenu(){
    this.toggleMenuService.emitData();
  }

  onLangChange(language: any) : void{
    localStorage.setItem('lang', language);
    this.selectedLanguage = language;
    this.translateService.use(this.selectedLanguage);
  }

  logout(){
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
      if(result){
        localStorage.removeItem('accessToken');
        if(this.sideMenuOpen){
          this.toggleMenuService.emitData();
        }
        this.showLogOutButton = false;
        this.router.navigate(['/signin']);
      }
      
    });
  }
}

@Component({
  selector: 'confirm-dialog',
  template: `
    <mat-dialog-content>
    {{ 'are_you_sure_you_want_to_log_out?' | translate }}
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-stroked-button color="link" mat-dialog-close>{{ 'cancel' | translate }}</button>
      <button mat-raised-button color="primary" [mat-dialog-close]="true" cdkFocusInitial><b>{{ 'log_out' | translate }}</b></button>
    </mat-dialog-actions>
  `,
})
export class DialogContentExampleDialog {}
