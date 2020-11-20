import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndependenciaPage } from './independencia.page';

describe('IndependenciaPage', () => {
  let component: IndependenciaPage;
  let fixture: ComponentFixture<IndependenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndependenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndependenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
