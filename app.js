const url = "./ghost.json";
const ghostTable = document.getElementById("ghost-table");

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
  .then((resp) => resp.json())
  .then(function (ghostsList) {
    return ghostsList.map(function (ghosts) {
      let tr = createNode("tr"),
        tdName = createNode("td"),
        tdStr = createNode("td"),
        tdWeak = createNode("td"),
        tdEviOne = createNode("td"),
        tdEviTwo = createNode("td"),
        tdEviThree = createNode("td");
      tr.id = `${ghosts.name}`;
      tdName.innerHTML = `${ghosts.name}`;
      tdStr.innerHTML = `${ghosts.strength}`;
      tdWeak.innerHTML = `${ghosts.weakness}`;
      tdEviOne.innerHTML = `${ghosts.evidence[0]}`;
      tdEviTwo.innerHTML = `${ghosts.evidence[1]}`;
      tdEviThree.innerHTML = `${ghosts.evidence[2]}`;
      append(tr, tdName);
      append(tr, tdStr);
      append(tr, tdWeak);
      append(tr, tdEviOne);
      append(tr, tdEviTwo);
      append(tr, tdEviThree);
      append(ghostTable, tr);
    });
  });

function resetSelection() {
  document.getElementById("Poltergeist").style.display = "";
  document.getElementById("Banshee").style.display = "";
  document.getElementById("Jinn").style.display = "";
  document.getElementById("Wraith").style.display = "";
  document.getElementById("Phantom").style.display = "";
  document.getElementById("Mare").style.display = "";
  document.getElementById("Spirit").style.display = "";
  document.getElementById("Revenant").style.display = "";
  document.getElementById("Shade").style.display = "";
  document.getElementById("Demon").style.display = "";
  document.getElementById("Yurei").style.display = "";
  document.getElementById("Oni").style.display = "";
  document.getElementById("ghost-writing").style.backgroundColor = "";
  document.getElementById("ghost-writing").style.color = "";
  document.getElementById("ghost-orb").style.backgroundColor = "";
  document.getElementById("ghost-orb").style.color = "";
  document.getElementById("freezing-temps").style.backgroundColor = "";
  document.getElementById("freezing-temps").style.color = "";
  document.getElementById("fingerprint").style.backgroundColor = "";
  document.getElementById("fingerprint").style.color = "";
  document.getElementById("emf-five").style.backgroundColor = "";
  document.getElementById("emf-five").style.color = "";
  document.getElementById("spiritbox").style.backgroundColor = "";
  document.getElementById("spiritbox").style.color = "";
}

function ghostWriting() {
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  document.getElementById("ghost-writing").style.backgroundColor = "#f8f8ff";
  document.getElementById("ghost-writing").style.color = "#000000";
}

function ghostOrb() {
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Yurei").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  document.getElementById("ghost-orb").style.backgroundColor = "#f8f8ff";
  document.getElementById("ghost-orb").style.color = "#000000";
}

function freTemp() {
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  document.getElementById("freezing-temps").style.backgroundColor = "#f8f8ff";
  document.getElementById("freezing-temps").style.color = "#000000";
}

function finPrnt() {
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Yurei").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  document.getElementById("fingerprint").style.backgroundColor = "#f8f8ff";
  document.getElementById("fingerprint").style.color = "#000000";
}

function emfFive() {
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Yurei").style.display = "none";
  document.getElementById("emf-five").style.backgroundColor = "#f8f8ff";
  document.getElementById("emf-five").style.color = "#000000";
}

function spiritBox() {
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  document.getElementById("spiritbox").style.backgroundColor = "#f8f8ff";
  document.getElementById("spiritbox").style.color = "#000000";
}
