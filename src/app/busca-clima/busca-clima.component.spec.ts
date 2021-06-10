import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaClimaComponent } from './busca-clima.component';

describe('BuscaClimaComponent', () => {
  let component: BuscaClimaComponent;
  let fixture: ComponentFixture<BuscaClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
