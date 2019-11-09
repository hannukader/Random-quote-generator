/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** 
 Array of quote objects with quote, source, citation, years,tags as properties.
***/
const quotes=[{
	quote:"It's the possibility of having a dream come true that makes life interesting",
	source :"Paulo Coelho",
	citation:"The alchemist",
	year:1988,
	tags:'dream'
	
},
{
	quote:"We are not makers of history. We are made by history.",
	source :"Martin Luther King, Jr",
	tags:'politics'
	
},
{
	quote:"You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it.",
	source :"Christopher Gardner ",
	citation:"Pursuit of happiness",
	year:2006,
	tags:'motivation'
},
{
	quote:"The seeker after truth should be humbler than the dust.",
	source :"M.K. Gandhi ",
	citation:"M.K. Gandhi - Autobiography",
	year:1927,
	tags:'motivation'
},
{
	quote:"We recognize that there are no trivial occurrences in life if we get the right focus on them.",
	source :" Mark Twain ",
	citation:" Autobiography of Mark Twain",
	year:1906,
	tags:'motivation'
}];
let interval;
/***
 * `getRandomQuote` function picks a random quote from quote array
***/
function getRandomQuote(){
	let random = Math.floor(Math.random()*quotes.length);
	return quotes[random];
}
/***
 * `getRandomColor` function chooses a random color 
***/
function getrRandomColor(){
	return Math.floor(Math.random()*256);
}
 /***
 * setting interval sets a interval for executing `printQuote'
***/
var myVar = setInterval(printQuote, 3000);
 /***
 * `ChangeColor` function change background color with change of quote
***/
function changeColor() {
	var red = getrRandomColor();
	var green = getrRandomColor();
	var blue = getrRandomColor();
	let color = `rgb(${red},${green},${blue})`;	
    document.body.style.background = color; 
 } 
 /***
 * `printQuote` function print random quotes choosed by `randomQuotes`
***/
 
function printQuote(){
	let randomQuote = getRandomQuote();
	let printStatement = `<p class="quote">${randomQuote.quote}  </p>
	<p class="source"> ${randomQuote.source}`;
	if(randomQuote.citation){
		printStatement +=`<span class="citation"> ${randomQuote.citation} </span>`;
							}
	if(randomQuote.year){
		printStatement +=`<span class="year"> ${randomQuote.year} </span>`;
		}
		printStatement +=`,<span class="tag"> ${randomQuote.tags} </span></p>`;
    changeColor(); 
	document.getElementById("quote-box").innerHTML = printStatement;
}



/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);