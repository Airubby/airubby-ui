import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DomSanitizer,SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'ai-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.less'],
})
export class ColComponent implements OnInit {

    grid: number;
    style:SafeStyle;
    classList:"'first','second'";
    constructor(private sanitizer:DomSanitizer,private el:ElementRef) {
    }

    ngOnInit() {
        console.log(this.el)
        console.log(this.el.nativeElement.parentElement)
        let parent=this.el.nativeElement.parentElement.parentElement;
        if(parent.localName!="ai-row"){
            parent=parent.parentElement;
        }
        if (parent.getAttribute("gutter")) {
            let styleStr:string="";
            styleStr += "margin-left: " + parent.getAttribute("gutter") / 2 + "px;";
            styleStr += "margin-right: " + parent.getAttribute("gutter") / 2 + "px;";
            this.style = this.sanitizer.bypassSecurityTrustStyle(styleStr);
        }
        console.log(parent.getAttribute("gutter"))
    }

}
