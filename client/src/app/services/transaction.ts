export interface Transaction {
  region: string;
  type: string;
  good: Good;
  timestamp: Date;
}

export interface Good {
  name: string;
  quantity: number;
}
