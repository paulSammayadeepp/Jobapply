import { Component, OnInit, Input, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('width') ModalWidth: String = "300px"
  
  

  constructor(public modalElement: ElementRef) { }
  ngOnDestroy(): void {
    let body = document.querySelector("body")
    if(body) {
      body.style.overflowY = "auto"
    }
  }
  ngAfterViewInit(): void {
    // document.body.appendChild(this.modalElement)
  }

  ngOnInit(): void {
    let body = document.querySelector("body")
    if(body) {
      body.style.overflowY = "hidden"
    }
    
  }
  

}
