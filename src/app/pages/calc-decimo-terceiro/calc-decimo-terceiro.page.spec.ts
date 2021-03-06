import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcDecimoTerceiroPage } from './calc-decimo-terceiro.page';

describe('CalcDecimoTerceiroPage', () => {
  let component: CalcDecimoTerceiroPage;
  let fixture: ComponentFixture<CalcDecimoTerceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcDecimoTerceiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcDecimoTerceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
