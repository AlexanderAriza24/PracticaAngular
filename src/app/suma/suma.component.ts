import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  numero1: number;
  numero2: number;
  resultado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  suma(): void{

    this.resultado = this.numero1 + this.numero2;
  }
}
