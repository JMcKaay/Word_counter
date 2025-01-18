let textInputArea = document.getElementById("textInput");
let charCount = document.getElementById("char-counter-value");
let wordCount = document.getElementById("word-counter-value");

textInputArea.addEventListener("input", () => {
  charCount.textContent = textInputArea.value.length;

  let txt = textInputArea.value.trim();

  
  wordCount.textContent = txt.split(/\s+/).filter((item) => item).length;
});

