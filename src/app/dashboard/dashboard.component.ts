import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
   receivedData: any;
   

  constructor(private dataSharingService:  DataSharingService) {
     
  }

  ngOnInit() {
   
  this.dataSharingService.data$.subscribe(val => this.receivedData = val);
  }

}
