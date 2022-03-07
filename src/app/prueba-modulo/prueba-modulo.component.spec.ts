import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaModuloComponent } from './prueba-modulo.component';

describe('PruebaModuloComponent', () => {
  let component: PruebaModuloComponent;
  let fixture: ComponentFixture<PruebaModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
