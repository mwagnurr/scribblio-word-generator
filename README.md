amazingly awesome word generator for custom word lists for scribblio (https://skribbl.io/)


using https://www.datamuse.com/api/ endpoints
to get related words from the input word list

### How to use

provide input/input.json file with words in the correct structure,
e.g.:

```json
{
    "words": [
        "dangerous",
        "edible",
        "playful",
        "music"
    ]
}
```

execute:

    npm i
    npm start

copy paste out/words.txt content to scribble.io custom word list