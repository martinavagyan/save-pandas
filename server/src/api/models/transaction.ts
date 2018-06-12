export interface Transaction {
  region: string;
  type: string;
  good: Good;
  timestamp: Date;
  supplyCapacity?: number;
}

export interface Good {
  name: string;
  quantity: number;
}
