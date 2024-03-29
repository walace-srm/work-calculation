import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReleaseNotesPage } from './release-notes.page';

describe('ReleaseNotesPage', () => {
  let component: ReleaseNotesPage;
  let fixture: ComponentFixture<ReleaseNotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseNotesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReleaseNotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
