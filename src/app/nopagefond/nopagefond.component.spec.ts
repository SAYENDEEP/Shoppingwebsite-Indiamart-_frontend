import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NopagefondComponent } from './nopagefond.component';

describe('NopagefondComponent', () => {
  let component: NopagefondComponent;
  let fixture: ComponentFixture<NopagefondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NopagefondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NopagefondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
