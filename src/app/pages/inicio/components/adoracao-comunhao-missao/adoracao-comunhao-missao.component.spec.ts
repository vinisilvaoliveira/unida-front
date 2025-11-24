import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoracaoComunhaoMissaoComponent } from './adoracao-comunhao-missao.component';

describe('AdoracaoComunhaoMissaoComponent', () => {
  let component: AdoracaoComunhaoMissaoComponent;
  let fixture: ComponentFixture<AdoracaoComunhaoMissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoracaoComunhaoMissaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdoracaoComunhaoMissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
