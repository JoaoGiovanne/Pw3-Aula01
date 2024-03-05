import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-text-overflow',
  templateUrl: './text-overflow.component.html',
  styleUrls: ['./text-overflow.component.css']
})
export class TextOverflowComponent {
  @Input() clip: boolean =  true;
  click(){
    if(this.clip){
      this.clip = false

    }
    else{
      this.clip = true
    }
  }
  hidden: boolean = true
  ocultar(){
    if(this.hidden){
      this.hidden = false
    }
    else{
      this.hidden = true
    }
  }

  flex: boolean = true

  @Input() texto: string = ''

}
