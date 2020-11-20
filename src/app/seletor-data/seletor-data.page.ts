import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seletor-data',
  templateUrl: './seletor-data.page.html',
  styleUrls: ['./seletor-data.page.scss'],
})
export class SeletorDataPage implements OnInit {

  customMonthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cidade = 'São Paulo';

  hoje = new Date();

  goToEventos(){
    this.router.navigate(['/eventos']);
  }

}
