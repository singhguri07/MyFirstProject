import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  uname="D";
  ps:string;
  constructor() { }

  ngOnInit() {
  }
  abc(u:string,p:string):void{
      this.uname=u
      this.ps=p;
      console.log("Username: "+this.uname+"\nPassword: "+p);
      
  }
}
