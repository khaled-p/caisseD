import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPartenairesComponent } from './modifier-partenaires.component';

describe('ModifierPartenairesComponent', () => {
  let component: ModifierPartenairesComponent;
  let fixture: ComponentFixture<ModifierPartenairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierPartenairesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
