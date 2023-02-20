(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total;
  }
  const rta1 = calcTotal([1, 2, 3, 4])
  console.log(rta1);

  // si deseo que la función retorne un tipo de datos debo definirlo después del paréntesis de parámetros
  const calcTotal2 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString();
  }
  const rta2 = calcTotal([1, 2, 3, 4, 5])
  console.log(rta2);

  // para definir una función que no retorne nada se usa el tipo de función void

  const functionVoid = (prices: number[]): void => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`);
  }

  functionVoid([1, 3, 5, 7])
})()
