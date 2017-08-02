export class DisplayItemModel {
  diType: string;
  name: string;
  constructor(diType: string, name: string) {
    this.diType = diType;
    this.name = name;
  }
}

export class SymbolModel extends DisplayItemModel {
  symbolType: string;
  constructor(name: string) {
    super('symbol', name);
  }
}

export class ContainerModel extends DisplayItemModel implements Iterable<DisplayItemModel> {
  children = new Array<DisplayItemModel>();
  constructor(name: string) {
    super('container', name);
  }

  symbols(): Array<DisplayItemModel>{
    return this.children.filter(v =>  v instanceof SymbolModel);
  }

  containers(): Array<DisplayItemModel>{
    return this.children.filter(v =>  v instanceof ContainerModel);
  }

  descendantSymbols(): Array<SymbolModel> {
    const result = new Array<SymbolModel>();
    for (const child of this.children) {
      if (child instanceof SymbolModel) {
        result.push(child);
      } else if (child instanceof ContainerModel){
        result.push(...child.descendantSymbols());
      }
    }
    return result;
  }

  descendantContainers(): Array<ContainerModel> {
    const result = new Array<ContainerModel>();
    for (const child of this.children) {
      if (child instanceof ContainerModel) {
        result.push(child);
        result.push(...child.descendantContainers());
      }
    }
    return result;
  }

  // Iterable implementation
  [Symbol.iterator]() {
    let index = 0;
    const components = this.children;
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