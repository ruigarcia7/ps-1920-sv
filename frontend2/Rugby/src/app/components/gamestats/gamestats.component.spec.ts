import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GamestatsComponent } from './gamestats.component';

describe('GamestatsComponent', () => {
  let component: GamestatsComponent;
  let fixture: ComponentFixture<GamestatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamestatsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GamestatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
