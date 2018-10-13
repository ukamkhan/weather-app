console.log('Starting app');

setTimeout(() => {
  console.log('Inside of Callback!');
}, 2000);

setTimeout(() => {
  console.log('Inside of Callback2');
}, 5000);

console.log('Finishing app');
