function randomNumber() {
  return Math.floor(Math.random()*100)
}

function delayRandonNum(VAlue) {
  let countdown = 3;
  let countdownInterval = setInterval(()=>{
      console.log(`${countdown} => Remaing second...`);
      countdown--

      if(countdown < 0){
          clearInterval(countdownInterval)
          let final = randomNumber()
          console.log(`RAMDOM NUMBER ==> ${final}`);
      }
  },1000)
}

delayRandonNum()