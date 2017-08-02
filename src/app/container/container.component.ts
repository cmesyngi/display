import { Component, OnInit, Input } from '@angular/core';
import { ContainerModel } from '../models/models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  @Input() container: ContainerModel;
  constructor() { }

  ngOnInit() {
  }

  showSymbols(event: any) {
    alert(this.container.symbols().map(s => s.name));
  }

  showDescendantSymbols(event: any) {
    alert(this.container.descendantSymbols().map(s => s.name));
  }

  showContainers(event: any) {
    alert(this.container.containers().map(s => s.name));
  }

  showDescendantContainers(event: any) {
    alert(this.container.descendantContainers().map(s => s.name));
  }
}