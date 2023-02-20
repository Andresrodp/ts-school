(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto = createProductJson('Camisa', new Date(), 10)
  console.log(producto);
  const producto2 = createProductJson('Camiseta', new Date(), 5, 'S')
  console.log(producto2);

})()
