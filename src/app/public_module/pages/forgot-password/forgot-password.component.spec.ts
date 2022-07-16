import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ForgotPasswordComponent } from "./forgot-password.component"

describe('ForgotPasswordComponent', () => {
  let fixture: ComponentFixture<ForgotPasswordComponent>;
  let component: ForgotPasswordComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotPasswordComponent],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
  })

  afterEach(() => {
    fixture.destroy();
  });

  it('should created', () => {
    expect(component).toBeTruthy();
  })
})