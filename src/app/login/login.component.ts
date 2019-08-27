import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TaskboardsdataService } from '../taskboardsdisplay/taskboardsdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(
    private fb:FormBuilder,
    private _taskdata:TaskboardsdataService,
    private _router:Router

  ) { }

  ngOnInit() {
    this.login=this.fb.group({

    })
  }

}
