import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMieiOrdiniComponent } from './i-miei-ordini.component';

describe('IMieiOrdiniComponent', () => {
  let component: IMieiOrdiniComponent;
  let fixture: ComponentFixture<IMieiOrdiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMieiOrdiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMieiOrdiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
