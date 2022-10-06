import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //declare input property childMessage with @Input decorator
  @Input() childMessage :string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
