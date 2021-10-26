//1
function countToTwenty(){
  //from 1 to 20
  for (let i = 1; i < 21; i+=1) {
     console.log(i) 
  }
}

//2
function countFromTwenty(){
  for (let i = 20; i >= 1; i-=1) {
      console.log(i)
  }
}

//3
function countToN(num){
  for (let i = 1; i < num + 1; i++) {
      console.log(i)
  }
}


//4
function countFromN(num){
  for (let i = num; num >= 1; num-=1) {
      console.log(num)
  }
}

//5
function countEveryOdd(num){
  for (let i = 1; i <= num; i++) {
      if (i % 2 === 1) {
        //   i % !== 0
          console.log(i)
      }
  }
}



//calling funtions

//countToTwenty()
//countFromTwenty()
//countToN(10)
//countFromN(10)
//countEveryOdd(10)