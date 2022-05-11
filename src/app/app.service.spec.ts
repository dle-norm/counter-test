import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        AppService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(AppService);
  });

  it('Init test : should create', () => {
    expect(service).toBeTruthy();
  });
});
