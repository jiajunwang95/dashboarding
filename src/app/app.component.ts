import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  MenuList = [
    {
      title : 'Overview',
      icon : 'bar-chart',
      open : false,
      selected : true,
      disabled : false,
      path : '',
    },    {
      title : 'Request',
      icon : 'medicine-box',
      open : false,
      selected : false,
      disabled : false,
      path : '',
    }

  ]
  metricSchema = [{head : 'hard', col : [[{head : 'OS'},{head : 'DB'}],[{head : 'OS'},{head : 'DB'}]]},{head : 'patch', col : [{head : 'OS'},{head : 'DB'}]}]
  ngOnInit():void{
    console.log("Perform your magic here....")
  }
}
