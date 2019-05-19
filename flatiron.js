var head_text = document.querySelector(".wuWords");

function toggleClass() {
  if (head_text.className == 'red') {
    head_text.className = 'blue'
  } else {
    head_text.className = 'red'
  }
}

head_text.onmouseover = toggleClass;