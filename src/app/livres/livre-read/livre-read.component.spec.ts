import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreReadComponent } from './livre-read.component';

describe('LivreReadComponent', () => {
  let component: LivreReadComponent;
  let fixture: ComponentFixture<LivreReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
