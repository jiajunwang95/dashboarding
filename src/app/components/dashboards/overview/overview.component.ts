import { Component, OnInit } from '@angular/core';
import {value } from './value'
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class OverviewComponent implements OnInit{
  data_array : any[] = [];
  selected_data : {} = {}
  ngOnInit(){
    
    this.selected_data = this.convert_array(value);
    console.log("What is value",this.selected_data)
    this.data_array = Object.keys(this.selected_data);
  }

  /**
   * @param Array [{}]
   * @return Object{rank no : {}}
   */
  convert_array(data : Array<any>){
    const return_object = {};
    data.forEach(ranking => {
      if(!return_object[ranking["RANK"]]){
        return_object[ranking["RANK"]] = ranking;
      }
    });
    return return_object;
  }
}
