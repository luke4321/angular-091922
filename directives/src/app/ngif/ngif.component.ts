import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  showMe!: boolean;
  nums = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
