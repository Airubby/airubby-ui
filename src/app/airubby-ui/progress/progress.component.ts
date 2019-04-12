import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {

  //接受父组件传来的数据
  @Input() frontBg:String; 
  @Input() backBg:String; 
  @Input() value:Number; 
  @Input() type:String='area'; 

  constructor() { }

  ngOnInit() {
  }

}
