import {Component} from '@angular/core';

@Component({
    selector:'app-office',
   // templateUrl: '../office/office.component.html',
//    template: `
//       <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
//       show = {{show}}
//       <br>
//       <div *ngIf="show">Text to show</div>`,

template: `
<h1>test</h1>`,

    styleUrls:['../office/office.component.css']
})

export class OfficeComponent{
   show:boolean = true;
}