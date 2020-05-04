import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'src/services/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
msgObj:any;
isShow:boolean=false;
  constructor(private _toasterService: ToasterService) { }
  ngOnInit(): void {
    this._toasterService.currrentMessage.subscribe((response: any) => {

      if (response.msg) {
        this.isShow=true
       this.msgObj = response;

       setTimeout(() => {
         this.close()
       }, this.msgObj.timeout);
      }




    });
  }

  close()
  {
    this.isShow=false;
  }
}
