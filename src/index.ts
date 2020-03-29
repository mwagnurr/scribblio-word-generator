import { outputFileSync, readJsonSync } from "fs-extra";
import { getRelatedNouns } from "./api";



const main = async () => {


    console.log('starting the awesome generator...');

    let resultWords: Set<string> = new Set();


    const inputJson: { words: Array<string> } = readJsonSync('input/input.json');

    console.log('inputJson', inputJson)
    console.log('==============================================');

    for (let currInputWord of inputJson.words) {


        console.log('getting related words for word: ', currInputWord);
        const result = await getRelatedNouns(currInputWord);
        //console.log('result: ', result);

        if (result) {

            for (let curr of result) {

                console.log('add word: ', curr.word);
                resultWords.add(curr.word);


            }
            console.log('... added words, curr number of words: ', resultWords.size);
            console.log('==============================================');
        }

    }

    outputFileSync('out/words.txt', Array.from(resultWords).join(','));

}

main().catch(console.error);