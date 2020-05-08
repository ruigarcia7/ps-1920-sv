import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OponentComponent } from './oponent.component';

describe('OponentComponent', () => {
  let component: OponentComponent;
  let fixture: ComponentFixture<OponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
