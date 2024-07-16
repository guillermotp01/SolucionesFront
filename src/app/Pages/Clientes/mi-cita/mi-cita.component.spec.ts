import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCitaComponent } from './mi-cita.component';

describe('MiCitaComponent', () => {
  let component: MiCitaComponent;
  let fixture: ComponentFixture<MiCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiCitaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
