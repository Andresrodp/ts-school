(() => {
  let myDinamicVar: any;
  myDinamicVar = 100
  console.log('number', myDinamicVar);
  myDinamicVar = {}
  console.log('object', myDinamicVar);
  myDinamicVar = 'hola'
  console.log('string', myDinamicVar);
  // No es buena práctica usar any. pero podemos asignarle un tipo de dato de la siguiente forma:
  const rta = (myDinamicVar as string).toUpperCase();
  console.log('ejemplo 1', rta);
  myDinamicVar = 100;
  const rta2 = (<number>myDinamicVar).toFixed();
  console.log('ejemplo 2', rta2);
})()
