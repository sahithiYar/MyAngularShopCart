import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit, OnChanges {

  private _internalChangedProdN = '';
  @Output() avialNotify = new EventEmitter();
  changeLog: string[] = [];
  @Input() likes: number;
  @Input() alertProduct;
  @Input() 
  set alertProdName(name: string){
      this._internalChangedProdN = (name && name.trim()) || '<no name set>';
  }; 

  get alertProdName(): string { return this._internalChangedProdN; }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      if(propName == "likes"){
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    }
    this.changeLog.push(log.join(', '));
  }
}