import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor (
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit (): void {
  }

  /**
   * GoBack action
   */
  public async goUp (): Promise<void> {
    await this.router.navigate(['/up']);
  }

  /**
   * GoBack action
   */
  public async goDown (): Promise<void> {
    await this.router.navigate(['/down']);
  }

  /**
   * GoBack action
   */
  public async goReset (): Promise<void> {
    await this.router.navigate(['/reset']);
  }
}
