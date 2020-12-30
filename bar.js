function makeGraph(container) {
  const barCharts = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];
  const graph = document.getElementById(container);
  const ul = document.createElement('ul');
  graph.appendChild(ul);
  for(let i = 0; i < barCharts.length; i++) {
    let value = barCharts[i];
    const item = document.createElement('li');
    ul.appendChild(item);
    item.innerHTML = value;
    item.style.height=value * 10 + "px";
    item.style.top=(199 - value * 10) + "px";
    item.style.left = (i * 50 + 20) + "px";
    item.style.visibility="visible";
    if (value <= 5) {
      item.style.background = "green";
    } else if (value > 10) {
      item.style.background = "red";
    } else item.style.background = "yellow";
  }
}

window.onload = makeGraph("graph");
