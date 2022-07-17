import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

/*TODO: Ders13 jquery kullanımı
declare var $:any*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ETicaretClient';
 
  constructor() { }
  /*
   TODO: Ders15 toastr
  constructor(private toastrService: CustomToastrService) {
 
  this.toastrService.message('Hello world!', 'Toastr fun!', {
    messageType: ToastrMessageType.Error,
    position: ToastrPosition.BottomFullWidth
  });
  }*/
}



/*$(document).ready(()=>{alert("asw")})*/
