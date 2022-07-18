import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PublicComponent } from './public.component';

describe('PublicComponent', () => {
  let fixture: ComponentFixture<PublicComponent>;
  let component: PublicComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  describe('PublicComponent user interface elements testing', () => {
    it('should find app-header-nav-pub element in fixture', () => {
      const publicComponentDebug: DebugElement = fixture.debugElement;
      const appHeaderNavPubElemen: DebugElement = publicComponentDebug.query(
        By.css('app-header')
      );
      const appHeaderNavPub: HTMLElement = appHeaderNavPubElemen.nativeElement;

      expect(appHeaderNavPub).toBeTruthy();
    });
  });
});
