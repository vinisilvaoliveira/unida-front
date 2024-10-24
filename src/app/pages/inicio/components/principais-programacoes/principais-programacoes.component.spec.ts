import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisProgramacoesComponent } from './principais-programacoes.component';

describe('PrincipaisProgramacoesComponent', () => {
  let component: PrincipaisProgramacoesComponent;
  let fixture: ComponentFixture<PrincipaisProgramacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipaisProgramacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipaisProgramacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
