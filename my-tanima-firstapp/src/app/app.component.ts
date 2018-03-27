import { Component } from '@angular/core';

@Component({
  selector: 'app-office',
  //templateUrl: './office/office.component.html',
  //template:'<H1>Hii test </H1>',
  template: `
      <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
      show = {{show}}
      <br>
      <div *ngIf="show">Text to show</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show:boolean = true;
  title = 'tanima';
  surname = 'mukherjee';
  showType = '2';
  nameValues = [
    {serial:2,movie:'Bahubali'},{serial:3,movie:'MOM'}]
}
