import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesAcceuilComponent } from './partenaires-acceuil.component';

describe('PartenairesAcceuilComponent', () => {
  let component: PartenairesAcceuilComponent;
  let fixture: ComponentFixture<PartenairesAcceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesAcceuilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesAcceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
