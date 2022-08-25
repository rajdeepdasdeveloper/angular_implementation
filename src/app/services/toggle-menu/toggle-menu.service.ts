import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  constructor() { }

  private toggleMenuState = new Subject();
  public toggleMenuState$ = this.toggleMenuState.asObservable();
  private toggleMenuVal = false;

  emitData(){
    console.log('Data Emited');
    this.toggleMenuVal = !this.toggleMenuVal;
    this.toggleMenuState.next(this.toggleMenuVal);
  }
}
