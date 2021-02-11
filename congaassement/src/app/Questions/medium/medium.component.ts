import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {
  prices:number[];
  result:number = 0;
  constructor() {
    this.prices =  [21, 19, 24, 32, 30, 31, 34, 31, 31, 26, 29];
   }

  ngOnInit(): void {
    let temp = 0;
    for (let index = 0; index < this.prices.length; index++) {
      if(this.prices[index] > this.prices[index+1] && this.prices[index] > temp)
        temp = this.prices[index];
    }
    let indxofmaxnum = this.prices.indexOf(temp);
    let resltarray = this.prices.slice(indxofmaxnum,this.prices.length).sort();
    if(resltarray.length > 0)
    this.result = resltarray[0];
  }

}
