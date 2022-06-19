import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderNavComponent } from './header-nav.component';

describe('HeaderNavComponent', () => {
  let fixture: ComponentFixture<HeaderNavComponent>;
  let component: HeaderNavComponent;
  let headerNavDebug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderNavComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
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
