import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css']
})
export class DownComponent implements OnInit {
  constructor (
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit (): void {
  }

  /**
   * GoBack action
   */
  public async goBack (): Promise<void> {
    await this.router.navigate(['/home/']);
  }

  /**
   * Down counter action
   */
  public down (): void {
    const counter = this.appService.getCounter();
    this.appService.setCounter(counter - 1);
    this.appService.keepCount();
  }
}
