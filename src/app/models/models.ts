export class DisplayItemModel {
  diType: string;
  name: string;
  constructor(diType: string, name: string) {
    this.diType = diType;
    this.name = name;
  }
}

export class SymbolModel extends DisplayItemModel {
  constructor(name: string) {
    super('symbol', name);
  }
}

export class ContainerModel extends DisplayItemModel implements Iterable<DisplayItemModel> {
  children = new Array<DisplayItemModel>();
  constructor(name: string) {
    super('container', name);
  }
  
  symbols(): Array<SymbolModel>{
    return this.children.filter(v =>  v instanceof SymbolModel);
  }

  descendantSymbols(): Array<SymbolModel> {
    let result = this.symbols();
    for (let child of this.children.filter(v =>  v instanceof ContainerModel)) {
      let containers = (child as ContainerModel).descendantSymbols();
      for (let c of containers) {
        result.push(c);
      }
    }
    return result;
  }

  // Iterable implementation
  [Symbol.iterator]() {
    let index = 0;
    let components = this.children;
    return {
      next(): IteratorResult<DisplayItemModel> {
        if (index < components.length) {
          return {
             done: false,
             value: components[index++]
          }
        } else {
          return {
            done: true,
            value: null
          }
        }
      }
    }
  }
}