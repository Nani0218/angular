import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdharcardComponent } from './adharcard.component';

describe('AdharcardComponent', () => {
  let component: AdharcardComponent;
  let fixture: ComponentFixture<AdharcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdharcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdharcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
