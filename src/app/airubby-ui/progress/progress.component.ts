import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer,SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'ai-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {

  //接受父组件传来的数据
  @Input() frontBg:String; 
  @Input() backBg:String; 
  @Input() value:Number=0; 
  @Input() type:String; 

  outStyle:SafeStyle;
  innerStyle:SafeStyle;

  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
    if(this.backBg){
      let styleStr:string="";
      styleStr += "background: " + this.backBg;
      this.outStyle = this.sanitizer.bypassSecurityTrustStyle(styleStr);
    }
    let styleStr:string="";
    styleStr+="width:"+this.value+"%;";
    if(this.frontBg){
      if(this.frontBg){
        styleStr+=this.type=='zebra'?"background: linear-gradient(to right,"+this.frontBg+" 50%, transparent 0%);":"background: "+this.frontBg+";";
      }
      styleStr += "background-size: 4px 100%;";
    }
    this.innerStyle = this.sanitizer.bypassSecurityTrustStyle(styleStr);
  }

}
