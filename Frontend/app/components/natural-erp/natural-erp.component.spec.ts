import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalERPComponent } from './natural-erp.component';

describe('NaturalERPComponent', () => {
  let component: NaturalERPComponent;
  let fixture: ComponentFixture<NaturalERPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalERPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalERPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
