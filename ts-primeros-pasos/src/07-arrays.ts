(() => {

  // de la forma inferida el array solo acepta el tipo de datos que se defina desde un inicio
  // si son número solo aceptará números
  const price = [100, 120, 200, 300];
  console.log('precios', price);

  // para que un array acepte desde su declaración varios tipos de variables hay que usar la forma explícita
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(200)

  console.log('mixed', mixed);

})();
