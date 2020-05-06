import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AthleteComponent } from './athlete.component';

describe('AthleteComponent', () => {
  let component: AthleteComponent;
  let fixture: ComponentFixture<AthleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
