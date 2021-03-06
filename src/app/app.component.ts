import { Component } from '@angular/core';
import { SymbolModel, ContainerModel } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = new ContainerModel('top level container');
  constructor() {
     const container2 = new ContainerModel('child container');
     const sym1 = new SymbolModel('sym 1');
     const sym2 = new SymbolModel('sym 2');
     const sym3 = new SymbolModel('sym 3');

    const containerX = new ContainerModel('X');
     containerX.children.push(new SymbolModel('symX1'));
     containerX.children.push(new SymbolModel('symX2'));
     containerX.children.push(new SymbolModel('symX3'));

     this.display.children.push(sym1);
     container2.children.push(sym2);
     container2.children.push(containerX);
     container2.children.push(sym3);
     this.display.children.push(container2);

     //this.display.children.push(containerX);
  }
}