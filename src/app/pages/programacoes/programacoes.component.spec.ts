import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacoesComponent } from './programacoes.component';

describe('ProgramacoesComponent', () => {
  let component: ProgramacoesComponent;
  let fixture: ComponentFixture<ProgramacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
