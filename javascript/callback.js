// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b){
//     callback(a,b)
// }

// cal(5,6,sum)



// CALLBACK HELL  / NESTED CALLBACK 

// function getdata(dataid){
//     setTimeout(()=>console.log('data'),3000);
// }

// getdata(1);
// getdata(2);
// getdata(3);

//but there is no timeout between printing of data

//NESTED CALLBACK 

function getdata(dataid, getnextdata) {
  setTimeout(() => {
    console.log("data", dataid);
    if (getnextdata) {
      getnextdata();
    }
  }, 3000);
}

// Start the chain of calls outside the function
getdata(1, () => {
  getdata(2, () => {
    getdata(3, () => {
      getdata(4);
    });
  });
});

