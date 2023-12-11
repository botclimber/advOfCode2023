const x = document.getElementsByTagName("pre")[0].textContent
const data = x.split("\n")
data.pop()

class Element{
    constructor(character, string){ 
        this.possibleNumber = {
            "zero":  0,
            "one":   1,
            "two":   2,
            "three": 3,
            "four":  4,
            "five":  5,
            "six":   6,
            "seven": 7,
            "eight": 8,
            "nine":  9
        }
        this.numberPattern = /\d/
        this.string = string
        this.char = character
    }

    isNum(){ return this.char.match(this.numberPattern); }

    isNumByExtense(){
        for (const [k, v] of Object.entries(this.possibleNumber)){ if(this.string.includes(k)) return [v, true];  }

        return [0, false]
    }
}

function getNumber(element, pos){

    for(el in element){
        const nr = parseInt(el)
        const string = (pos > 0)? element.slice(-(nr+1)): element.slice(0, nr+1)

        const e = new Element(element[Math.abs(parseInt(pos) - parseInt(nr))], string)
        
        if (e.isNum()) return e.char;

        const byNrExtense = e.isNumByExtense()
        if(byNrExtense[1]) return byNrExtense[0];
    }
}

const arrayOfNumbers = data.map( r => String(getNumber(r, 0)) + String(getNumber(r, r.length - 1)))

console.log(arrayOfNumbers)

console.log("Second part result: ", arrayOfNumbers.reduce( (tot, current) => parseInt(tot) + parseInt(current), 0 ))