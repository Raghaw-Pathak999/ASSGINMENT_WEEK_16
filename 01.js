

let userNAME = 'Ragahw_PATAHAK'

function reversString(inputVAL) {
    return inputVAL.split("").reverse().join("");
}

function reversedVAl(inputVAL) {
    setTimeout(()=>{
      let reverseOUTPUT = reversString(inputVAL)
      console.log("here is the reversed VAlue  "+ reverseOUTPUT);
    },1000)
}

reversedVAl(userNAME)

