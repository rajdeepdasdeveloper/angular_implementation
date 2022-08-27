import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private http : HttpService) { }

  ngOnInit(): void {
    this.http.httpRequest('POST', "http://localhost:3000/status", {}).subscribe(response => {
      console.log(response);
    }, err => {
      console.log(err);
    });

  }

}
