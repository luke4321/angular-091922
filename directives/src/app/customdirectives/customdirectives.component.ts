import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdirectives',
  templateUrl: './customdirectives.component.html',
  styleUrls: ['./customdirectives.component.css']
})
export class CustomdirectivesComponent implements OnInit {
  color1 = '';

  constructor() { }

  ngOnInit(): void {
  }

}
