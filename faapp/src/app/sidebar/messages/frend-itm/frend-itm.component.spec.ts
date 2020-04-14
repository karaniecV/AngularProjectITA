import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrendItmComponent } from './frend-itm.component';

describe('FrendItmComponent', () => {
  let component: FrendItmComponent;
  let fixture: ComponentFixture<FrendItmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrendItmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrendItmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
