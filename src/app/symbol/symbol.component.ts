import { Component, OnInit, Input } from '@angular/core';
import { SymbolModel } from "../models/models";

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {
  @Input() symbol: SymbolModel;
  constructor() { }

  ngOnInit() {
  }

}
