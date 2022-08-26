import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  //constructor() { }

  ngOnInit(): void {
    
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', action: true},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', action: true},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', action: true},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', action: true},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', action: true},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', action: true},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', action: true},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', action: true},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', action: true},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', action: true},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', action: true},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', action: true},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', action: true},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', action: true},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', action: true},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', action: true},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', action: true},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', action: true},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', action: true},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', action: true},
];


