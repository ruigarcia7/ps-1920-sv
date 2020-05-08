import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TornamentComponent } from './tornament.component';

describe('TornamentComponent', () => {
  let component: TornamentComponent;
  let fixture: ComponentFixture<TornamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornamentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TornamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
