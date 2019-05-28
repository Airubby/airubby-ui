import { Component, OnInit, Input,ElementRef } from '@angular/core';
import { DomSanitizer,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'ai-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.less']
})
export class RowComponent implements OnInit {

    @Input() gutter: number;
    style:SafeStyle;
    constructor(private sanitizer:DomSanitizer,private el:ElementRef) {
    }

    ngOnInit() {
        if(this.gutter){
            let styleStr:string="";
            styleStr += "margin-left: -" + this.gutter / 2 + "px;";
            styleStr += "margin-right: -" + this.gutter / 2 + "px;";
            this.style = this.sanitizer.bypassSecurityTrustStyle(styleStr);
        }
        console.log(this.el)
        let child=this.el.nativeElement.children[0];
        for(let i=0;i<child.children.length;i++){
            let c=child.children[i];
            let classList="";
            if(child.children[i].localName!="ai-col"){
                c=child.children[i].children[0];
            }
            if(c.getAttribute("grid")){
                classList+=" ai-col-"+c.getAttribute("grid");
            }
            if(c.getAttribute("sm")){
                classList+=" ai-col-sm-"+c.getAttribute("sm");
            }
            if(c.getAttribute("md")){
                classList+=" ai-col-md-"+c.getAttribute("md");
            }
            if(c.getAttribute("lg")){
                classList+=" ai-col-lg-"+c.getAttribute("lg");
            }
            c.children[0].setAttribute("class",classList.replace(/(^\s*)/g,""));
        }
    }

}
