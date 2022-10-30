//Pass the id of the <input> element to be copied as a parameter to the copy()
let copy = (textId) => {
    //Selects the text in the <input> elemet
    document.getElementById(textId).select();
    //Copies the selected text to clipboard
    document.execCommand("copy");
  };

  let copy1 = (textId) => {
    //Selects the text in the <input> elemet
    document.getElementById(textId).select();
    //Copies the selected text to clipboard
    document.querySelectorAll("copy1");

  };

  
  let copy2 = (textId) => {
    //Selects the text in the <input> elemet
    document.getElementById(textId).select();
    //Copies the selected text to clipboard
    document.execCommand("copy2");
  };