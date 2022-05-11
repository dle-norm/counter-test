import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResetComponent } from './reset.component';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  const service = new AppService();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetComponent],
      imports: [FormsModule, ReactiveFormsModule],
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
    fixture = TestBed.createComponent(ResetComponent);
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
  it('Is minor', () => {
    component.validateBirth('2022-05-01');
    expect(component.appService.getCounter()).toBe(8);
    expect(component.appService.getAction()).toBe(28);
  });
  it('Is major', () => {
    component.validateBirth('2001-05-01');
    expect(component.appService.getCounter()).toBe(0);
    expect(component.appService.getAction()).toBe(0);
  });
});
