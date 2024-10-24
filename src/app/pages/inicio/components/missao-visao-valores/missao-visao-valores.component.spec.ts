import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaoVisaoValoresComponent } from './missao-visao-valores.component';

describe('MissaoVisaoValoresComponent', () => {
  let component: MissaoVisaoValoresComponent;
  let fixture: ComponentFixture<MissaoVisaoValoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissaoVisaoValoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MissaoVisaoValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
