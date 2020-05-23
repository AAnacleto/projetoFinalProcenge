import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendamanterComponent } from './vendamanter.component';

describe('VendamanterComponent', () => {
  let component: VendamanterComponent;
  let fixture: ComponentFixture<VendamanterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendamanterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendamanterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
