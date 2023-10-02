import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingularCryptoComponent } from './singular-crypto.component';

describe('SingularCryptoComponent', () => {
  let component: SingularCryptoComponent;
  let fixture: ComponentFixture<SingularCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingularCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingularCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
