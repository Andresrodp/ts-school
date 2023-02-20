(() => {
  // la mejor manera de usar null y undefined es dando dos tipos de datos a la variable
  // ejemplo 1:
  let myNumber: number | null = null;
  myNumber = 12;

  function saludo(name: string | null) {
    let hola = 'hola '
    if (name) {
      hola += name;
    } else {
      hola += 'nobody';
    }
    console.log(hola);
  }

  saludo('Andrés');
  saludo(null);

  // ejemplo 2:

  function saludo2(name: string | null) {
    let hola = 'holi '
    hola += name?.toUpperCase() || 'nobody'
    console.log(hola);
  }

  saludo2('andres ricardo')
  saludo2(null)
})()
