//takes a string and your desired length to cut off at

export default function abridgedText(text, yourLength) {
  if(text.length > yourLength) {
    return (text.substring(0, yourLength) + '...');
  } else return text;
}
