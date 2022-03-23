const sentence = " and i'm the creator of this website!"

const machineWrite = () => {
    let i = 0
    const sentenceArray = sentence.split("");
    let printsentence = setInterval(() => {
        if (document.querySelector("#machine-write")) {
            if (i < sentenceArray.length) {
                document.querySelector("#machine-write").textContent += sentenceArray[i]
                i++;
            }
            if (i === sentenceArray.length) {
                clearInterval(printsentence);
                
            }
        }else{
            clearInterval(printsentence)
            i = 0
        }
    }, 190);
}


export default machineWrite