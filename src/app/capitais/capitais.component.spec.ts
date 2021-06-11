import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitaisComponent } from './capitais.component';

describe('CapitaisComponent', () => {
  let component: CapitaisComponent;
  let fixture: ComponentFixture<CapitaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
