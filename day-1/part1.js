const x = document.getElementsByTagName("pre")[0].textContent
const data = x.split("\n")
data.pop()

class Element{
    constructor(character){ 
        this.numberPattern = /\d/
        this.char = character
    }

    isNum(){ console.log(this.char); return this.char.match(this.numberPattern); }
}

function getNumber(element, pos){
    for(el in element){
        const e = new Element(element[Math.abs(parseInt(pos) - parseInt(el))])
        if (e.isNum()) return e.char
    }
}

const arrayOfNumbers = data.map( r => parseInt(getNumber(r, 0) + getNumber(r, r.length - 1)))

console.log("First part result: ", arrayOfNumbers.reduce( (tot, current) => tot + current, 0 ))