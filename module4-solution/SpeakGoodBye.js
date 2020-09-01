(function (window) {
  var byeSpeaker = {};                          // declaring a new object byeSpeaker
  var speakWord = "Good Bye";                   // declaring a new speakword
  byeSpeaker.speak = function (name) {          // declaring speak function so that it is attached to byeSpeaker object
    console.log(speakWord + " " + name);
  }
  
  window.byeSpeaker = byeSpeaker;              // expose byeSpeaker object to global scope

})(window);                                    // wrapping entire contents inside IIFE
