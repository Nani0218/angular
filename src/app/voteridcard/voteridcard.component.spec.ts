import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteridcardComponent } from './voteridcard.component';

describe('VoteridcardComponent', () => {
  let component: VoteridcardComponent;
  let fixture: ComponentFixture<VoteridcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoteridcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteridcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
