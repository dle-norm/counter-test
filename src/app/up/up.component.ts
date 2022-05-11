import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {
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
   * Up counter action
   */
  public up (): void {
    const counter = this.appService.getCounter();
    this.appService.setCounter(counter + 1);
    this.appService.keepCount();
  }
}
