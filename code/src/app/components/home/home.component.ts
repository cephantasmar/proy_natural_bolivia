import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() occupation:string="";
  @Output() greet=new EventEmitter<string>();
  title = "home";
  isTrue=false;
  movies=[{id:"1", name:"El padrino"}, {id:"2", name:"El padrino2"}, {id:"3", name:"El padrino3"}];
  esEditable: boolean=false;
  estilo="mov2"
  onMouse(e:string){
    console.log(e);
  }
  emitToParent(){
    this.greet.emit("hi, i'm your child");
  }
}
