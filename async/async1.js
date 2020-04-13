

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
// async3();
// async4();

function takeTime(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n > 3) {
        reject('超时了');
      } else {
        resolve('时间刚好');
      }
    }, n * 1000);
  })
}
function step11() {
  return takeTime(1)
}
function step12() {
  return takeTime(2)
}
function step13() {
  return takeTime(3)
}

function do1() {
  step11()
    .then(res => step12())
    .then(res => step13())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
// do1();

async function do2() {
  let s1 =await step11();
  let s2 =await step12();
  let s3 =await step13();
  console.log(s1);
  console.log(s2);
  console.log(s3);
}
do2();
