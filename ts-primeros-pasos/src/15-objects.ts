(() => {
  type Syzes = 'S' | 'M' | 'L' | 'XL';

  // Para la creación de objetos como tipos se usa la siguiente estructura:
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    syze?: Syzes
  }
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Camisa',
    createdAt: new Date(),
    stock: 10
  })
  addProduct({
    title: 'Pantalon',
    createdAt: new Date(),
    stock: 12,
    syze: 'M'
  })

  console.log(products);

})()
