import { addProduct, products, totalStock } from "./product.service";

addProduct({
  title: 'Camisas',
  createdAt: new Date(),
  stock: 5,
  syze: 'M'
})

addProduct({
  title: 'Camisas',
  createdAt: new Date(),
  stock: 4,
  syze: 'L'
})

console.log(products);

const total = totalStock();

console.log('total stock', total);


