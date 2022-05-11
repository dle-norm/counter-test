import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor (
    public appService: AppService
  ) { }

  ngOnInit (): void {
    this.appService.setCounter(0);
    this.appService.setX(1);
    this.appService.setAction(0);
    this.appService.setBackground('#FFFFFF');
  }
}
