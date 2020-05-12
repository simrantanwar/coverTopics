import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonSetting } from './button-setting.model';


@Component({
  selector: 'app-button-control',
  templateUrl: './button-control.component.html',
  styleUrls: ['./button-control.component.css']
})
export class ButtonControlComponent implements OnInit {

  // -----------Default Settings----------

  addButtonDefaultSettings: ButtonSetting;
  editButtonDefaultSettings: ButtonSetting;
  printButtonDefaultSettings: ButtonSetting;
  closeButtonDefaultSettings: ButtonSetting;
  deleteButtonDefaultSettings: ButtonSetting;

  // -----------Custom Settings----------

  @Input() addButtonCustomSettings: ButtonSetting;
  @Input() editButtonCustomSettings: ButtonSetting;
  @Input() printButtonCustomSettings: ButtonSetting;
  @Input() closeButtonCustomSettings: ButtonSetting;
  @Input() deleteButtonCustomSettings: ButtonSetting;
  
  // -----------Event Emitter----------

  @Output() addButtonEvent = new EventEmitter;
  @Output() editButtonEvent = new EventEmitter;
  @Output() printButtonEvent = new EventEmitter;
  @Output() closeButtonEvent = new EventEmitter;
  @Output() deleteButtonEvent = new EventEmitter;

  

  constructor() { }

  ngOnInit(): void {
    this.loadDefaultSetting();

    if (this.addButtonCustomSettings != undefined && this.addButtonCustomSettings != null) {
      this.UpdateDefaultButtonSetting(this.addButtonCustomSettings, this.addButtonDefaultSettings);
    }

    if (this.editButtonCustomSettings != undefined && this.editButtonCustomSettings != null) {
      this.UpdateDefaultButtonSetting(this.editButtonCustomSettings, this.editButtonDefaultSettings);
    }
    if (this.printButtonCustomSettings != undefined && this.printButtonCustomSettings != null) {
      this.UpdateDefaultButtonSetting(this.printButtonCustomSettings, this.printButtonDefaultSettings);
    }
    if (this.closeButtonCustomSettings != undefined && this.closeButtonCustomSettings != null) {
      this.UpdateDefaultButtonSetting(this.closeButtonCustomSettings, this.closeButtonDefaultSettings);
    }
    if (this.deleteButtonCustomSettings != undefined && this.deleteButtonCustomSettings != null) {
      this.UpdateDefaultButtonSetting(this.deleteButtonCustomSettings, this.deleteButtonDefaultSettings);
    }
  }

  loadDefaultSetting() {
    this.addButtonDefaultSettings = new ButtonSetting({ id: 'addBtn', caption: 'Add', click: 'onclick', disabled: false, hidden: false, imgUrl: 'fa fa-plus' });
    this.editButtonDefaultSettings = new ButtonSetting({ id: 'editBtn', caption: 'Edit', click: 'onclick', disabled: true, hidden: false, imgUrl: '' });
    this.printButtonDefaultSettings = new ButtonSetting({ id: 'printBtn', caption: 'Print', click: 'onclick', disabled: false, hidden: false, imgUrl: '' });
    this.closeButtonDefaultSettings = new ButtonSetting({ id: 'closeBtn', caption: 'Close', click: 'onclick', disabled: false, hidden: false, imgUrl: '' });
    this.deleteButtonDefaultSettings = new ButtonSetting({ id: 'deleteBtn', caption: 'Delete', click: 'onclick', disabled: true, hidden: false, imgUrl: '' });
  }

  // Update the Default Setting with Custom setting passed from page
  UpdateDefaultButtonSetting(updatedsettings, defaultSettings) {
    if (updatedsettings.id != undefined && updatedsettings.id != null && updatedsettings.id != '') {
      defaultSettings.id = updatedsettings.id;
    }
    if (updatedsettings.caption != undefined && updatedsettings.caption != null && updatedsettings.caption != '') {
      defaultSettings.caption = updatedsettings.caption;
    }
    if (updatedsettings.disabled != undefined && updatedsettings.disabled != null) {

      defaultSettings.disabled = updatedsettings.disabled;

    }
    if (updatedsettings.hidden != undefined && updatedsettings.hidden != null) {
      defaultSettings.hidden = updatedsettings.hidden;
    }
    if (updatedsettings.click != undefined && updatedsettings.click != null && updatedsettings.click != '') {
      defaultSettings.click = updatedsettings.click;
    }
    if (updatedsettings.imgUrl != undefined && updatedsettings.imgUrl != null && updatedsettings.imgUrl != '') {
      defaultSettings.imgUrl = updatedsettings.imgUrl;
    }

  }

  onAddClick(event) {
    let data = 'dgfg'
    this.addButtonEvent.emit(event);
  }
  onEditClick() {
    this.editButtonEvent.emit();
  }
  onPrintClick() {
    window.print()
    this.printButtonEvent.emit();
  }
  onDeleteClick() {
    this.deleteButtonEvent.emit();
  }

  onCloseClick() {
    this.closeButtonEvent.emit();
  }
}
