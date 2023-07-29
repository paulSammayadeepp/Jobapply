import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export interface emitType {
  status: boolean,
  redirectState: boolean
}

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})
export class WarningModalComponent implements OnInit {
  @Output() modalEmit = new EventEmitter<emitType>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(openStatus: boolean, redirectSatatus: boolean) {
    this.modalEmit.emit({
      status: openStatus,
      redirectState: redirectSatatus
    })
  }
  
}
