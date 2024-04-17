const fs = require('fs');
const path = require('path');


class ReadTextFileAndSearchAspecificString {
    readTextFile;
    constructor(text) {
        this.readTextFile = text;
    }
     ReadTextFile(textInput) {
        try {
            const text = fs.readFileSync(textInput, 'utf8');
           return text;
        } catch (error) {
            console.log(error)
        }
    }

     searchAspecificString(filename) {
        const splitText = readTextFile.split("");
        let occurrences = 0;

        splitText.forEach((text) => {
            if(filename === text) {
                occurrences++;
            }
        })
        return occurrences;

    }

}

const readTextFileAndSearchAspecificString = new ReadTextFileAndSearchAspecificString();

const readTextFile = readTextFileAndSearchAspecificString.ReadTextFile("textFile.txt")

const searchAspecificString = readTextFileAndSearchAspecificString.searchAspecificString("s");

console.log("read text file : ", readTextFile);
console.log("Number of occurrence for a specific string : ", searchAspecificString);