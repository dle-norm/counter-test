import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpComponent } from './up.component';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;
  const service = new AppService();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpComponent],
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
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Init test : should create', () => {
    expect(component).toBeTruthy();
    // all good? let put test variable env.
    component.appService.setCounter(8);
    component.appService.setX(1);
    component.appService.setAction(28);
    component.appService.setBackground('#FFFFFF');
  });
  it('add test', () => {
    component.up();
    expect(component.appService.getCounter()).toBe(9);
    expect(component.appService.getX()).toBe(1);
    expect(component.appService.getAction()).toBe(29);
    expect(component.appService.getBackground()).toBe('#FFFFFF');
  });
  it('add test++', () => {
    component.up();
    expect(component.appService.getCounter()).toBe(10);
    expect(component.appService.getX()).toBe(2);
    expect(component.appService.getAction()).toBe(30);
    expect(component.appService.getBackground()).toBe('#e74c3c');
  });
});
