import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[colorDirective]',
})
export class CustomDirective implements OnInit {
  
  @Input() color = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.color || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }


  @HostBinding('style.border') border!: string;
  @HostBinding('style.backgroundColor') backgroundcolor!: string;

  constructor(private ele: ElementRef) {}

  ngOnInit(): void {
    this.border="5px solid blue";
    this.backgroundcolor = "yellow";
  }


  highlight(color: string): void {
    this.ele.nativeElement.style.backgroundColor = color;
  }
 
}
