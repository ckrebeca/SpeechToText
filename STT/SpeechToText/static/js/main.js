// function say(text) {
// 	responsiveVoice.speak(text, "UK English Male")
// }

// function listen() {
// 	var recognition = new webkitSpeechRecognition();
// 	recognition.lang = 'fil-PH';
// 	recognition.interimResults = true;
// 	recognition.onresult = function(event) { 
//     if (event.results.length > 0) {
//       $("#text").text(event.results[0][0].transcript)
//     }
// 	}

// 	//Pwede nya basahin (ulitin) yung sinabi mo, pa uncomment nalang to

// 	// recognition.onend = function(event) {
// 	// 	say($("#text").text())
// 	// }
// 	recognition.start();
// }
function listen() {
  alert("what");
  var recognition = new webkitSpeechRecognition();
  recognition.lang = 'fil-PH';
  recognition.interimResults = true;
  recognition.onresult = function(event) { 
    if (event.results.length > 0) {
      $("#text").text(event.results[0][0].transcript)
    }
  }

  //Pwede nya basahin (ulitin) yung sinabi mo, pa uncomment nalang to

  // recognition.onend = function(event) {
  //  say($("#text").text())
  // }
  recognition.start();
}