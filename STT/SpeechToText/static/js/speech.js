  function speechToText(){
            var r = document.getElementById("comment");
            if("webkitSpeechRecognition" in window){
                var speechRecognizer = new webkitSpeechRecognition();
                speechRecognizer.continuous = true;
                speechRecognizer.interimResults = true;
                speechRecognizer.lang =  'fil-PH';
                speechRecognizer.start();

                var finalTranscripts = "";
                speechRecognizer.onresult = function(event){
                    var interimTranscripts = "";
                    for(var i=event.resultIndex; i<event.results.length; i++){
                        var transcript = event.results[i][0].transcript + '\n';
                        transcript.replace("\n", "<br>");
                        if(event.results[i].isFinal){
                            finalTranscripts += transcript;
                        }
                        else{
                            interimTranscripts += transcript;
                        }
                        r.innerHTML = finalTranscripts + interimTranscripts;
                    }
                };
                speechRecognizer.onerror = function(event){
                };
            }
            else{
                r.innerHTML = "Your browser does not support that.";
            }

            return false;
            }