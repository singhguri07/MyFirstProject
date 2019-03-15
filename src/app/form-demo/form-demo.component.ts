import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'formdemo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.css']
})
export class FormDemoComponent implements OnInit {

  form;
  constructor() { }



  ngOnInit() {

    this.form=new FormGroup(
      {
        userid:new FormControl("",Validators.required),
        pass:new FormControl("",Validators.required),
       
      }
    );

  }

  onSubmit(myform)
  {
    console.log(myform.userid);
    console.log(myform.pass);
  }

}
