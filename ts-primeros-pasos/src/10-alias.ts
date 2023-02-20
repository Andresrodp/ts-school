(() => {
  // types

  type UserID = string | number;

  // Literal types

  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`${userId.toLowerCase()}: size: ${size}`);
    } else {
      console.log(`number, ${userId.toFixed(2)}`);
    }
  }
  greeting('User1', 'L')
  greeting('User2', 'XS')
})()
