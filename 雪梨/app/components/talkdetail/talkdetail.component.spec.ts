import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkdetailComponent } from './talkdetail.component';

describe('TalkdetailComponent', () => {
  let component: TalkdetailComponent;
  let fixture: ComponentFixture<TalkdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
