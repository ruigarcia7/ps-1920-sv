import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthletegamestatsComponent } from './athletegamestats.component';

describe('AthletegamestatsComponent', () => {
  let component: AthletegamestatsComponent;
  let fixture: ComponentFixture<AthletegamestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletegamestatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthletegamestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
