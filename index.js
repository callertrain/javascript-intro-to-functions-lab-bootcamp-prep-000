var uppercase = "HELLO"
var lowercase = "hello"
var mixedCase = "Hi there"
var spy

function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase);
}

function logWhisper(string){
  if (`string` === 'HELLO') {
  console.log(`string`.toLowerCase);
  }
}
