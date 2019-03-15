import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input('num')
  x:number=1;

  @Input('val')
  y:number=2;

  email="guri@gmail.com"

  constructor() { }

  ngOnInit() {
  }
  getResult():number{
    let res=1;
    for(let i=1;i<=this.y;++i)
    {
        res=res*this.x;
    }
    console.log(res);
    return res;
  }

}
