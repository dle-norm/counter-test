import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  form: FormGroup;

  constructor (
    public appService: AppService,
    public router: Router
  ) { }

  ngOnInit (): void {
    this.form = new FormGroup({
      dob: new FormControl(null)
    });
  }

  /**
   * GoBack action
   */
  public async goBack (): Promise<void> {
    await this.router.navigate(['/home/']);
  }

  public validateBirth (e): void {
    const user = new Date(e);
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const major = new Date(year - 18, month, day);
    if (user.getTime() - major.getTime() <= 0) {
      this.appService.setCounter(0);
      this.appService.setX(1);
      this.appService.setAction(0);
      this.appService.setBackground('#FFFFFF');
    }
  }
}
