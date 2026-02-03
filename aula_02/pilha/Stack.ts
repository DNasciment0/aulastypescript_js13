interface stackInterface<Type> {
  push(dataItem: Type): void; // Adiciona um elemento ao topo da pilha
  pop(): Type | undefined; // Remove e retorna o elemento do topo da pilha (último elemento adicionado)
  isEmpty(): boolean; // Verifica se a pilha está vazia
  count(): number; // Retorna a quantidade de elementos na pilha
  printStack(): void; // Exibe todos os elementos da pilha
  peek(): Type | undefined; // Retorna o elemento do topo da pilha sem removê-lo
  contains(dataItem: Type): boolean; // Verifica se um elemento existe na pilha
  clear(): void; // Remove todos os elementos da pilha
}
export class Stack<Type> implements stackInterface<Type> {
  private StackData: Array<Type> = [];
  constructor() {}
  isEmpty(): boolean {
    let result = this.StackData.length <= 0;
    return result;
  }
  push(dataItem: Type): void {
    this.StackData.push(dataItem);
  }
  pop(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.StackData.pop();
      return element;
    }
  }
  count(): number {
    let len = this.StackData.length;
    return len;
  }
  printStack(): void {
    // Retorna o elemento de trás para frente
    for (let i = this.StackData.length - 1; i >= 0; i--) {
      console.log(this.StackData[i]);
    }
  }
  peek(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.StackData[this.StackData.length - 1];
      return element;
    }
  }
  contains(dataItem: Type): boolean {
    if (this.StackData.includes(dataItem)) {
      return true;
    } else {
      return false;
    }
  }
  clear(): void {
    this.StackData.length = 0;
  }
}
