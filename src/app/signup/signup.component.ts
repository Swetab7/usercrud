import { Component, OnInit,ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f',{static: false}) signupForm:NgForm;
  constructor(private userservice:UserserviceService) { 
    
  }
  signupUser={
    id:0,
    name:'',
    email:'',
    username:'',
    password:''
  };

  ngOnInit() {
  }

  // formSubmit(form:NgForm){
  //   console.log(form);
  // }

  formSubmit(){
    console.log(this.signupForm.value);

  }

}
