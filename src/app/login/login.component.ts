import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../core/share/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  usuario!:Usuario;


  constructor(private formBuider:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuider.group({
      email:['', Validators.required],
      senha:['', Validators.required]
    })
  }

  onSubmit(){
    console.log(this.form.value)
  }
}
