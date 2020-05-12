import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ToasterService } from 'src/services/toaster.service';
import { UserService } from './user.service';
import { catchError, tap, finalize, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { LoaderService } from 'src/services/loader.service';
import { ButtonSetting } from 'src/shared controls/button-control/button-setting.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isLoader: boolean = true;
  userResponse: any;
  userDetail: any;
  userDetail$: Observable<any>;
  dob: Date;

  get email() {
    return 'mohit@gmial.com'
  }

  set email(value) {
    console.log(value)
  }

  addButtonCustomVal: ButtonSetting;
  deleteButtonCustomVal: ButtonSetting;
  constructor(private _toasterService: ToasterService, private _userService: UserService, private _loaderService: LoaderService,
    private _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.email = "simran2gmil.com";
    this.getUsersAsyncPipe()
    this.addButtonCustomVal = new ButtonSetting({ id: 'addBtn', caption: 'Add User', disabled: false, hidden: false, imgUrl: 'fa fa-gear' })
    this.deleteButtonCustomVal = new ButtonSetting({ id: 'deleteBtn', caption: 'Delete User', disabled: false, hidden: false, imgUrl: 'fa fa-circle' })

    // this.getUsers();
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  deleteUser() {
    let response = {
      msg: 'User Deleted Successfully',
      color: 'danger',
      timeout: 4000
    }

    this._toasterService.showToaster(response);
  }


  getUsers() {
    // this.isLoader = true;
    this._loaderService.showLoader(true)

    this._userService.getUser().pipe(
      catchError(err => of(err)),
      tap(resp => {
        this.userResponse = resp;
        console.log(this.userResponse);
        this.userDetail = this.userResponse[0]
        this._cdr.markForCheck();

        // -----------------------------Print Message---------------------------------

        let msgObj = {
          msg: 'User Fetched Successfully',
          color: 'danger',
          timeout: 4000
        }

        this._toasterService.showToaster(msgObj);

        //----------------------------------------Print Message End-----------------------------

      }), finalize(() => {
        // this.isLoader = false;
        this._loaderService.showLoader(false)
      })
    ).subscribe();
  }
  addUser(data) {
    console.log(data)
  }
  printed() {
    console.log(3434343)
    let response = {
      msg: 'User Deleted Successfully',
      color: 'danger',
      timeout: 4000
    }

    this._toasterService.showToaster(response);
  }
  // -------------------------------------------------async pipe---------------------------------------------------------------------

  getUsersAsyncPipe() {
    // this.isLoader = true;
    this._loaderService.showLoader(true)

    this.userDetail$ = this._userService.getUser().pipe(
      catchError(err => of(err)),
      map(resp => {
        return resp[0];
      }), finalize(() => {
        // this.isLoader = false;
        this._loaderService.showLoader(false)
      })
    );
  }

  saveForm() {
    console.log(this.dob)
    let requestBody={
      dob: this.dob.toDateString()
    }
  }
}
