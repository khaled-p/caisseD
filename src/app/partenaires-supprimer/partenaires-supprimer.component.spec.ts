import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesSupprimerComponent } from './partenaires-supprimer.component';

describe('PartenairesSupprimerComponent', () => {
  let component: PartenairesSupprimerComponent;
  let fixture: ComponentFixture<PartenairesSupprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesSupprimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenairesSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
