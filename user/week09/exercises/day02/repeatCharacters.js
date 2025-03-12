/**
 * Returns a new string like the original one but with each character repeated.
 *
 * @param {_} [_=_] - A string to repeat each character.
 * @param {_} [_=_] - How many times to repeat each character.
 * @returns {_} The original text with each character repeated.
 */
export const repeatCharacters = (original="", num=0) => {
    let newText="";
    for(const char of original){
      
      newText+=char.repeat(num);
      
    }
    return newText;
  }
  repeatCharacters("hello",3);
  