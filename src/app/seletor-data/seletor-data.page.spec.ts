import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeletorDataPage } from './seletor-data.page';

describe('SeletorDataPage', () => {
  let component: SeletorDataPage;
  let fixture: ComponentFixture<SeletorDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeletorDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeletorDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
