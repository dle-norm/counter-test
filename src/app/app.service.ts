import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AppService implements OnInit {
  ngOnInit (): void {
    this.setCounter(0);
    this.setX(1);
    this.setAction(0);
    this.setBackground('#FFFFFF');
  }

  /*
   * Getter counter variable
   */
  getCounter (): number {
    return +localStorage.getItem('counter');
  }

  /*
   * Setter counter variable
   */
  setCounter (value: number): void {
    localStorage.setItem('counter', value.toString());
  }

  /*
   * Getter x variable
   */
  getX (): number {
    return +localStorage.getItem('x');
  }

  /*
   * Setter x variable
   */
  setX (value: number): void {
    localStorage.setItem('x', value.toString());
  }

  /*
   * Getter action variable
   */
  getAction (): number {
    return +localStorage.getItem('action');
  }

  /*
   * Setter action variable
   */
  setAction (value: number): void {
    localStorage.setItem('action', value.toString());
  }

  /*
   * Getter background variable
   */
  getBackground (): string {
    return localStorage.getItem('background');
  }

  /*
   * Setter background variable
   */
  setBackground (value: string): void {
    localStorage.setItem('background', value);
  }

  /*
   * Keep count method
   */
  public keepCount (): void {
    const action = this.getAction();
    this.setAction(action + 1);
    if (this.getAction() % 30 === 0) {
      const x = this.getX();
      this.setX(x * 2);
    }
    if (this.getCounter() >= 10) {
      this.setBackground('#e74c3c');
    } else if (this.getCounter() <= -10) {
      this.setBackground('#27ae60');
    } else {
      this.setBackground('#FFFFFF');
    }
  }
}
