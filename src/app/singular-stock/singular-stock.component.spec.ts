import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularStockComponent } from './singular-stock.component';

describe('SingularStockComponent', () => {
  let component: SingularStockComponent;
  let fixture: ComponentFixture<SingularStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingularStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingularStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
