import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcDissidioPage } from './calc-dissidio.page';

describe('CalcDissidioPage', () => {
  let component: CalcDissidioPage;
  let fixture: ComponentFixture<CalcDissidioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDissidioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcDissidioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
