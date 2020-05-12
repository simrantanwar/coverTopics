import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoader: boolean = false;
  constructor(private _loaderService: LoaderService) { }

  ngOnInit(): void {
    this._loaderService.currentState.subscribe(res => {
      this.isLoader = res;
    })
  }

}
