import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise1-binding',
  templateUrl: './exercise1-binding.component.html',
  styleUrls: ['./exercise1-binding.component.css']
})
export class Exercise1BindingComponent {
  hidden: boolean = true
  ocultar(){
    if(this.hidden){
      this.hidden = false
    }
    else{
      this.hidden = true
    }
  }
}
