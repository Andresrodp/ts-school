(() => {
  const login = (data: { email: string, password: number }) => {
    console.log(data);
  }

  login({ email: 'andres@info.com', password: 123456 })

  type Syzes = 'S' | 'M' | 'L' | 'XL'
  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    syze?: Syzes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Camisa',
    createdAt: new Date(),
    stock: 10,
    syze: 'M'
  })

  console.log(products);

})()
