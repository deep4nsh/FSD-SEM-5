async function f(){
    let myPromise = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('done'),2000);
    });
    let result = await myPromise;
    console.log(result);
}

f();