import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoCamposComponent } from './contato-campos.component';

describe('ContatoCamposComponent', () => {
  let component: ContatoCamposComponent;
  let fixture: ComponentFixture<ContatoCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoCamposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
