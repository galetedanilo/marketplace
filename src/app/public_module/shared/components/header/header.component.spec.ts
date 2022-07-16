import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderNavComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let headerNavDebug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    headerNavDebug = fixture.debugElement;
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  });

  describe('HeaderNav user interface elements testing', () => {
    it('should find the <header> element in fixture', () => {
      const headerElement: DebugElement = headerNavDebug.query(
        By.css('header')
      );
      const header: HTMLElement = headerElement.nativeElement;

      expect(header).toBeTruthy();
    });

    it('should find the <nav> element in fixture', () => {
      const navElement: DebugElement = headerNavDebug.query(By.css('nav'));
      const nav: HTMLElement = navElement.nativeElement;

      expect(nav).toBeTruthy();
    });
  });
});
