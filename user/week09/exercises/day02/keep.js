/**
 * Returns a new string with only the given characters left in it.
 *
 * @param {_} [_=_] - Some text to remove characters from.
 * @param {_} [_=_] - The characters to keep.
 * @returns {_} Text with only the given characters still in it.
 */
export const keepCharacters = (original="", keep="") => {
    let newText="";
    for( const char of original){
      if(keep.includes(char)){
        newText+=char;
  
      }
    }
    return newText;
  };
  
  keepCharacters("hello","el");