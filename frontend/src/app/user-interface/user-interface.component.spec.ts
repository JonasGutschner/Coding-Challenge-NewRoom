import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceComponent } from './user-interface.component';
import { beforeEach, describe, it} from 'node:test';

describe('UserInterfaceComponent', () => {
  let component: UserInterfaceComponent;
  let fixture: ComponentFixture<UserInterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInterfaceComponent]
    });
    fixture = TestBed.createComponent(UserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //it('should create', () => {
  //  expect(component).toBeTruthy();
  //});
});
