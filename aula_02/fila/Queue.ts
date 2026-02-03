interface queueInterface<Type> {
  enqueue(dataItem: Type): void; // Adiciona um elemento à fila
  dequeue(): Type | undefined; // Remove e retorna o primeiro elemento da fila
  isEmpty(): boolean; // Verifica se a fila está vazia
  count(): number; // Retorna a quantidade de elementos na fila
  printQueue(): void; // Exibe todos os elementos da fila
  peek(): Type | undefined; // Retorna o primeiro elemento da fila sem removê-lo
  contains(dataItem: Type): boolean; // Verifica se um elemento existe na fila
  clear(): void; // Para limpar a fila toda
}

export class Queue<Type> implements queueInterface<Type> {
  private QueueData: Array<Type> = [];

  constructor() {}

  isEmpty(): boolean {
    let result = this.QueueData.length <= 0;
    return result;
  }

  enqueue(dataItem: Type): void {
    this.QueueData.push(dataItem);
  }

  dequeue(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.QueueData.shift();
      return element;
    }
  }

  count(): number {
    let len = this.QueueData.length;
    return len;
  }

  printQueue(): void {
    for (let i = 0; i < this.QueueData.length; i++) {
      console.log(this.QueueData[i]);
    }
  }

  peek(): Type | undefined {
    if (this.isEmpty()) {
      console.log("A fila está vazia");
      return;
    } else {
      var element = this.QueueData[0];
      return element;
    }
  }

  contains(dataItem: Type): boolean {
    if (this.QueueData.includes(dataItem)) {
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.QueueData.length = 0;
  }
}
