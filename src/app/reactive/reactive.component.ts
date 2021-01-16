import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form=new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

}
