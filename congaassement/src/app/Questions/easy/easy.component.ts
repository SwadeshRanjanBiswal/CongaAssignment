import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {
   inputintarray:number[];
   displayresult:number=0;
  constructor() {
    this.inputintarray = [1, 2, 3, 4, 5, 5, 2, 4, 4];
   }

  ngOnInit(): void {    
     var total = this.inputintarray.reduce(function(a, b){ return a + b; });
     if(total %2 == 0)
     {
        let halfnumber = total/2;
        let sum = 0;
        let result = 0;
         this.inputintarray.reduce(function(first,second){
          sum = first+second;
          if(sum == halfnumber)
          {
            result = second;
            return second;
          }
           return sum;
        });
        this.displayresult = this.inputintarray.indexOf(result);
        console.log(this.inputintarray.indexOf(result));
     }
  }

}
