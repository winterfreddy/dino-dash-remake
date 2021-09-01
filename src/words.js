let allWords = [];

// fetch('https://random-word-api.herokuapp.com/all/?swear=0')
//     .then(response => response.json())
//     .then(data => allWords = data);

function getSampleWord() {
    const randomNum = Math.floor(Math.random() * allWords.length);
    return allWords[randomNum];
}