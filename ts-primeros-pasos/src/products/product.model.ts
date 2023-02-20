export type Syzes = 'S' | 'M' | 'L' | 'XL';

export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  syze?: Syzes
}
