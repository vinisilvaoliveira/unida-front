import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuaComponent } from './contribua.component';

describe('ContribuaComponent', () => {
  let component: ContribuaComponent;
  let fixture: ComponentFixture<ContribuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContribuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
