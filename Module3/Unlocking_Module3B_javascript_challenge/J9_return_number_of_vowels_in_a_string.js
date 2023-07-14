const vowelString = 'challenging';
    function countVowels () {
        let countVowel = 0;   //i initialized countVowel to 0

        for(let v = 0; v<=vowelString.length; v++) {     //vowelString is my condition for the loop
            const char = vowelString[v];    //i assigned the characters using char in the IF statement below
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
                countVowel++;
            }
        }
        return countVowel;

    }
 
    console.log(countVowels());
