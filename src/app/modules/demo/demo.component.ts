import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  name = 'hemant kumar singh';
  size = 123213213123;
  userArr = ['Hemant Singh', 'Vinay', 'Surya', 'Sam', 'Sunil'];
  users = [
    {
      name: 'hemant',
      age: 56,
    },
    {
      name: 'ajay',
      age: 10,
    },
    {
      name: 'vinay',
      age: 89,
    },
    {
      name: 'Bijay',
      age: 20,
    },
    {
      name: 'Kumar',
      age: 97,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
