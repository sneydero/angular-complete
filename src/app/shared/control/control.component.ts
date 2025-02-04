import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
  
})
export class ControlComponent {
  // @HostBinding('class') clasName = 'control';
  // @HostListener('click') onClick(){
  //   console.log('Clicked!');
  // }

  private el = inject(ElementRef);

  label = input.required<string>(); 
  
  onClick(){
    console.log('Clicked!');
    console.log(this.el);
  }
}
