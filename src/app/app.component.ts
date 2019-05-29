import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  signup= new FormGroup({
     username: new FormControl('',Validators.required),
     password : new FormControl('',Validators.required)
  });
  from: any;

  get Username(){
    return this.signup.get('Username');
  }



}
