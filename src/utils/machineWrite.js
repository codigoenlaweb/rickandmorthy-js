const sentence = " and I'm the creator of this website"

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
                document.querySelector("#msmMachineWriteComplete").classList.add("scale-110")
                setTimeout(() => {
                    document.querySelector("#msmMachineWriteComplete").classList.remove("scale-110")
                }, 320);
            }
        }else{
            clearInterval(printsentence)
            i = 0
        }
    }, 190);
}


export default machineWrite