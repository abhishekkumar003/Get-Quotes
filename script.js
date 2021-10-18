const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const what = document.getElementById('what');


alert(" Welcome To Abhi Quotes :) ");


let rdata = '';
let qData = '';

const WhatMe = ()=>{
    let w = `https://api.whatsapp.com/send?text=${qData.text} || ${qData.author}`;
    window.open(w);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * 30);
    qData = rdata[rnum];
    quotes.innerText = `${qData.text}`;

    qData.author == null ? (author.innerText = 'UnKnown') 
    : (author.innerText = `${qData.author}`);
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";

    try {
        let data = await fetch(api);
        rdata = await data.json();

        getNewQuotes();

        //console.log(rdata[0].text);
        //console.log(rdata[0].author);
    }
    catch (error) {

    }
};

newQ.addEventListener('click', getNewQuotes);
what.addEventListener('click', WhatMe);

getQuotes();