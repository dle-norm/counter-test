import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DownComponent } from './down.component';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;
  const service = new AppService();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownComponent],
      providers: [
        {
          provide: AppService,
          useValue: service
        },
        {
          provide: Router,
          useValue: {
            navigate: (url) => {
              return new Promise((resolve) => {
                resolve(url);
              });
            }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Init test : should create', () => {
    expect(component).toBeTruthy();
    // all good? let put test variable env.
    component.appService.setCounter(-8);
    component.appService.setX(1);
    component.appService.setAction(28);
    component.appService.setBackground('#FFFFFF');
  });
  it('down test', () => {
    component.down();
    expect(component.appService.getCounter()).toBe(-9);
    expect(component.appService.getX()).toBe(1);
    expect(component.appService.getAction()).toBe(29);
    expect(component.appService.getBackground()).toBe('#FFFFFF');
  });
  it('down test++', () => {
    component.down();
    expect(component.appService.getCounter()).toBe(-10);
    expect(component.appService.getX()).toBe(2);
    expect(component.appService.getAction()).toBe(30);
    expect(component.appService.getBackground()).toBe('#27ae60');
  });
});
