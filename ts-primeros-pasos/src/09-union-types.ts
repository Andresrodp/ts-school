(() => {
  let userId: string | number;
  userId = 123212421;
  console.log('number', userId);
  userId = 'AKD21231KA';
  console.log('string', userId);

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string, ${myText.toLowerCase()}`);
    } else {
      console.log(`number, ${myText.toFixed(2)}`);
    }
  }

  greeting('ANdrEs')
  greeting(13.7481231);


})()
