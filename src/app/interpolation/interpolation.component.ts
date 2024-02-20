import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  nome: string = "Rodney Pereira";
  imagem: string = "favicon.ico"
  n1: number = 2;
  n2: number = 2;
}
