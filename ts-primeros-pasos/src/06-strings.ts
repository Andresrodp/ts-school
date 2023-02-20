(() => {
  let productTitle = 'my Amazing product';
  console.log('valor inicial', productTitle);

  productTitle = 'my Amazing Shampoo'
  console.log('segundo valor', productTitle);

  const productDescription: string = "Lo que todos quieren usar";
  const productPrice = 120;
  const isNew: boolean = false;

  const sumary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
`;
  console.log(sumary);

})()
