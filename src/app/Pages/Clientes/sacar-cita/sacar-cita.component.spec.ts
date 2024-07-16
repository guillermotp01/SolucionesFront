import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacarCitaComponent } from './sacar-cita.component';

describe('SacarCitaComponent', () => {
  let component: SacarCitaComponent;
  let fixture: ComponentFixture<SacarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SacarCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SacarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
