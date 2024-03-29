import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcPericulosidadePage } from './calc-periculosidade.page';

describe('CalcPericulosidadePage', () => {
  let component: CalcPericulosidadePage;
  let fixture: ComponentFixture<CalcPericulosidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPericulosidadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcPericulosidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
