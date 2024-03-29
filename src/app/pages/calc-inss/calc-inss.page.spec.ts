import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcInssPage } from './calc-inss.page';

describe('CalcInssPage', () => {
  let component: CalcInssPage;
  let fixture: ComponentFixture<CalcInssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcInssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcInssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
