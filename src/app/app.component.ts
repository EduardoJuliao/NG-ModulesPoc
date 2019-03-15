import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'modules';

  constructor(private service: AppService){

  }

  ngOnInit() { 
    this.service.getTodo()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
}
