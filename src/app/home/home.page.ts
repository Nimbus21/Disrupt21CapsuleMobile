import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public loadingController: LoadingController, private router: Router) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Buscando',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate(['/seletor-data']);
    //console.log('Loading dismissed!');
  }

}
