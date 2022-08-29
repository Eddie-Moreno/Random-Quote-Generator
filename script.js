    let quotes = [
    {
      source: "-Eckhart Tolle",
      quote: '"Some changes look negative on the surface but you will soon realize that space is being created in your life for something new to emerge."',
      year: 2007
    },
    {
      source: "-Deepak Chopra",
      quote: '"There are no accidents … there is only some purpose that we haven’t yet understood."',
      year: 1999
    },
    {
      source: "-Tony Robbins",
      quote: '"Live life fully while you\'re here. Experience everything. Take care of yourself and your friends. Have fun, be crazy, be weird. Go out and screw up! You\'re going to anyway, so you might as well enjoy the process."',
      year: 2003
    },
    {
      source: "-Steve Jobs",
      quote: '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking"',
      year: 2008
    },
    {
      source: "-Mother Teresa",
      quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
      year: 1989
    },
  ];
   
   

    function getRandom(){
      let amount = quotes.length
      let ranAmount = Math.floor(Math.random() * amount)
      let ranQuote = quotes[ranAmount]
      console.log(ranQuote)
      return ranQuote
    }
    getRandom();


    function printQuote() {
      let randomQuote = getRandom()
      let ranQ = randomQuote.quote
      console.log(ranQ)
      let ranS = randomQuote.source
      console.log(ranS)
      let ranY = randomQuote.year
      console.log(ranY)
      
      let front = `<p class = "quote"> ${ranQ}</p>
      <p class = "source"> ${ranS}</p>`
      console.log(front)
      document.getElementById("quote-box").innerHTML=front
    }
    printQuote();
    
    document.getElementById('load-quote').addEventListener("click", printQuote, false);
