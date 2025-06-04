function drawViz(data, element) {
  element.innerHTML = '';
  var div = document.createElement('div');
  div.style.fontSize = '24px';
  div.style.fontFamily = 'Arial';
  div.innerText = 'Total de linhas: ' + data.tables.DEFAULT.length;
  element.appendChild(div);
}
