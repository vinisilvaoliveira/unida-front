import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundamentosFeComponent } from './fundamentos-fe.component';

describe('FundamentosFeComponent', () => {
  let component: FundamentosFeComponent;
  let fixture: ComponentFixture<FundamentosFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FundamentosFeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FundamentosFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
