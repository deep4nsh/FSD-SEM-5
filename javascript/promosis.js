const myPromise = new Promise((resolve,reject)=>{
    const password = 'marufaecgqere';
    if(password.length>8){
        resolve( )
    }
    else{
        reject("password is shorter in length")
    }
})

console.log(myPromise);
myPromise.then(console.log("psword length is ok")).catch((err)=>{console.log(err);}).finally((msg)=>{console.log('student of abes')})
