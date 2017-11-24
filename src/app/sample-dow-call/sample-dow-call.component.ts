import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LegModal } from '../modal/legModal';
import { GenericWebService } from '../generic-web-service/generic.web.service';

import 'rxjs/add/observable/throw'; //Todd, added this and fixed  'Observable_1.Observable.throw is not a function at CatchSubscriber.selector'

@Component({
  selector: 'fedex-sample-dow-call',
  templateUrl: './sample-dow-call.component.html',
  styleUrls: ['./sample-dow-call.component.css']
})
export class SampleDowCallComponent {
  public legs: LegModal[] = [];
  constructor(private router: Router, private webSvcCall: GenericWebService, private route: ActivatedRoute) {

  }


  ngOnInit() {
  }




  callGetLegs() {
    if (this.legs.length > 0) {
      // act like toggle
      this.legs = [];
      return;
    }

    //this.github.callLocalSpringBoot("http://localhost:8083/leg/DEN/COS").subscribe(p => {
    //this.webSvcCall.callDowGetLegs("http://c0003093.test.cloud.fedex.com:8083/leg/COS/DEN").subscribe(p => {
      // My Machine
       // New Server 
      this.webSvcCall.callDowGetLegs("http://c0006727.test.cloud.fedex.com:8083/leg/COS/DEN").subscribe(p => {      
      //this.webSvcCall.callDowGetLegs("http://199.82.96.215:8083/leg/COS/DEN").subscribe(p => {
      console.log("p=" + p);  
      this.legs = p;
      console.log("Todd test map to leg=" + p[0]);
    });

  }
}