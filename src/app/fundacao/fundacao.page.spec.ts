import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundacaoPage } from './fundacao.page';

describe('FundacaoPage', () => {
  let component: FundacaoPage;
  let fixture: ComponentFixture<FundacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
