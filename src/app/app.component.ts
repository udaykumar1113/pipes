import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String;
  date: String;
  amount: number;
  height: number;
  miles: number;

  car = {
    make : 'HONDA',
    model : 'ACCORD',
    year : '2008'
  }
  
  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onNameChange(value: string){
    this.name = value;
  }

  onDateChange(value: string){
    this.date = value;
  }

  onAmountChange(value: string){
    this.amount = parseFloat(value);
  }

  onHeightChange(value:string){
    this.height = parseFloat(value);
  }
}
