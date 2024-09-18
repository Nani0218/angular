import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDriveCommponentComponent } from './template-drive-commponent.component';

describe('TemplateDriveCommponentComponent', () => {
  let component: TemplateDriveCommponentComponent;
  let fixture: ComponentFixture<TemplateDriveCommponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDriveCommponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDriveCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
