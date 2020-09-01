(function (window) {
  var helloSpeaker = {};                        // declaring a new object helloSpeaker
  var speakWord = "Hello";                      // declaring a new speakword
  helloSpeaker.speak = function (name) {          // declaring speak function so that it is attached to helloSpeaker object
    console.log(speakWord + " " + name);
  }
  
  window.helloSpeaker = helloSpeaker;           // expose helloSpeaker object to global scope

})(window);                                     // wrapping entire contents inside IIFE
