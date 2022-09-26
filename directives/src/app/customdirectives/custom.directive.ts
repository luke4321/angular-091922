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


  // @HostBinding('style') customstyle: any;
  // stylelist = ['color: red', 'color: green', 'color: orange'];
  // index = 0;

  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.customstyle = this.stylelist[this.index++];
  //     this.index = this.index > 2 ? 0 : this.index;
  //   }, 500);
  // }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
 
}
