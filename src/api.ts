import { Options, get } from "request-promise";

const host = 'https://api.datamuse.com';

export async function getRelatedNouns(word: string) {

    //jja 	Popular nouns modified by the given adjective, per Google Books Ngrams 	gradual → increase
    let options: Options = {
        uri: `${host}/words?max=1000&v=enwiki&rel_jja=${word}`,
        json: true
    };

    return await get(options);
}