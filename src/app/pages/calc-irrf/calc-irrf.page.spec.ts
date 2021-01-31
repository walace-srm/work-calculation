import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcIrrfPage } from './calc-irrf.page';

describe('CalcIrrfPage', () => {
  let component: CalcIrrfPage;
  let fixture: ComponentFixture<CalcIrrfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcIrrfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcIrrfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
