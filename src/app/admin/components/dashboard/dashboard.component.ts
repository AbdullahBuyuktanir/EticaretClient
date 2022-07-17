import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
/* TODO: Ders14 alertify uygulaması*/
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  //constructor(private alertifyService: AlertifyService) { }
  constructor(spinner: NgxSpinnerService) { 
    super(spinner)
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
  }
 
  /*m(){
    this.alertifyService.message("merhaba", {delay: 5, messageType: MessageType.Success, position:Position.TopRight})
  }*/
}
