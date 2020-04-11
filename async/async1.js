

async function async1() {
  return 'G'
}

// console.log(async1());
// async1()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

function func1() {
  return 'GG';
}

async function async2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('GGG')
    }, 3000);
  })
}

async function async3() {
  let res3 = func1();
  let res4 = async2();
  console.log(res3, res4);
}
async function async4() {
  let res1 = await func1();
  let res2 = await async2();
  console.log(res1, res2);
}
async3();
async4();