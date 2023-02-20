(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log('is New', isNew);
  isNew = true
  console.log('is New', isNew);

  const random = Math.random()

  console.log('random', random);

  let conditional: boolean;

  conditional = random <= 0.5 ? true : false;
  console.log('boolean condicional', conditional);

})()
