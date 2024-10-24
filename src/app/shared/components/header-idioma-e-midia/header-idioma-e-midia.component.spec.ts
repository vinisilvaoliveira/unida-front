import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIdiomaEMidiaComponent } from './header-idioma-e-midia.component';

describe('HeaderIdiomaEMidiaComponent', () => {
  let component: HeaderIdiomaEMidiaComponent;
  let fixture: ComponentFixture<HeaderIdiomaEMidiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderIdiomaEMidiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderIdiomaEMidiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
