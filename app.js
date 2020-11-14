const url = "./ghost.json";
const ghostTable = document.getElementById("ghost-table");
const ghostStrWeak = document.getElementById("ghost-table-str-weak");

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

// #DFF2BF success green
// #FFD2D2 error red

fetch(url)
  .then((resp) => resp.json())
  .then(function (ghostsList) {
    return ghostsList.map(function (ghosts) {
      let trEvi = createNode("tr"),
        trStrWeak = createNode("tr"),
        tdName = createNode("td"),
        tdNameStrWeak = createNode("td"),
        tdStr = createNode("td"),
        tdWeak = createNode("td"),
        tdEviOne = createNode("td"),
        tdEviTwo = createNode("td"),
        tdEviThree = createNode("td");
      trEvi.id = `${ghosts.name}`;
      trStrWeak.id = `${ghosts.name}-str`;
      tdName.innerHTML = `${ghosts.name}`;
      tdNameStrWeak.innerHTML = `${ghosts.name}`;
      tdStr.innerHTML = `${ghosts.strength}`;
      tdWeak.innerHTML = `${ghosts.weakness}`;
      tdEviOne.innerHTML = `${ghosts.evidence[0]}`;
      tdEviOne.className = `${ghosts.evidence[0]}`;
      tdEviTwo.innerHTML = `${ghosts.evidence[1]}`;
      tdEviTwo.className = `${ghosts.evidence[1]}`;
      tdEviThree.innerHTML = `${ghosts.evidence[2]}`;
      tdEviThree.className = `${ghosts.evidence[2]}`;
      append(trEvi, tdName);
      append(trStrWeak, tdNameStrWeak);
      append(trStrWeak, tdStr);
      append(trStrWeak, tdWeak);
      append(trEvi, tdEviOne);
      append(trEvi, tdEviTwo);
      append(trEvi, tdEviThree);
      append(ghostStrWeak, trStrWeak);
      append(ghostTable, trEvi);
    });
  });

function resetSelection() {
  const resetConfirm = confirm(
    "This will reset all progress on the entire page."
  );
  if (resetConfirm == true) {
    document.getElementById("ghost-name").value = "";
    //evi
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
    //str
    document.getElementById("Poltergeist-str").style.display = "";
    document.getElementById("Banshee-str").style.display = "";
    document.getElementById("Jinn-str").style.display = "";
    document.getElementById("Wraith-str").style.display = "";
    document.getElementById("Phantom-str").style.display = "";
    document.getElementById("Mare-str").style.display = "";
    document.getElementById("Spirit-str").style.display = "";
    document.getElementById("Revenant-str").style.display = "";
    document.getElementById("Shade-str").style.display = "";
    document.getElementById("Demon-str").style.display = "";
    document.getElementById("Yurei-str").style.display = "";
    document.getElementById("Oni-str").style.display = "";
    //buttons
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
    //reset table colors
    var ghostWrit = document.getElementsByClassName("Ghost Writing");
    for (const element of ghostWrit) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    var ghostOrbs = document.getElementsByClassName("Ghost Orb");
    for (const element of ghostOrbs) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    var freezey = document.getElementsByClassName("Freezing Temperatures");
    for (const element of freezey) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    var fingeys = document.getElementsByClassName("Fingerprints");
    for (const element of fingeys) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    var emfive = document.getElementsByClassName("EMF Level 5");
    for (const element of emfive) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
    var sprite = document.getElementsByClassName("Spirit Box");
    for (const element of sprite) {
      element.style.backgroundColor = "";
      element.style.color = "";
    }
  } else {
    console.log("Nothing cleared!");
  }
}

function ghostWriting() {
  //evi
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  //str
  document.getElementById("Poltergeist-str").style.display = "none";
  document.getElementById("Banshee-str").style.display = "none";
  document.getElementById("Jinn-str").style.display = "none";
  document.getElementById("Wraith-str").style.display = "none";
  document.getElementById("Phantom-str").style.display = "none";
  document.getElementById("Mare-str").style.display = "none";
  //buttons
  document.getElementById("ghost-writing").style.backgroundColor = "#f8f8ff";
  document.getElementById("ghost-writing").style.color = "#000000";
  var ghostWrit = document.getElementsByClassName("Ghost Writing");
  for (const element of ghostWrit) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function ghostWritingReset() {
  //evi
  document.getElementById("Poltergeist").style.display = "";
  document.getElementById("Banshee").style.display = "";
  document.getElementById("Jinn").style.display = "";
  document.getElementById("Wraith").style.display = "";
  document.getElementById("Phantom").style.display = "";
  document.getElementById("Mare").style.display = "";
  //str
  document.getElementById("Poltergeist-str").style.display = "";
  document.getElementById("Banshee-str").style.display = "";
  document.getElementById("Jinn-str").style.display = "";
  document.getElementById("Wraith-str").style.display = "";
  document.getElementById("Phantom-str").style.display = "";
  document.getElementById("Mare-str").style.display = "";
  //buttons
  document.getElementById("ghost-writing").style.backgroundColor = "";
  document.getElementById("ghost-writing").style.color = "";
  var ghostWrit = document.getElementsByClassName("Ghost Writing");
  for (const element of ghostWrit) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function ghostOrb() {
  //evi
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  //str
  document.getElementById("Banshee-str").style.display = "none";
  document.getElementById("Spirit-str").style.display = "none";
  document.getElementById("Wraith-str").style.display = "none";
  document.getElementById("Revenant-str").style.display = "none";
  document.getElementById("Demon-str").style.display = "none";
  document.getElementById("Oni-str").style.display = "none";
  //buttons
  document.getElementById("ghost-orb").style.backgroundColor = "#f8f8ff";
  document.getElementById("ghost-orb").style.color = "#000000";
  var ghostOrbs = document.getElementsByClassName("Ghost Orb");
  for (const element of ghostOrbs) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function ghostOrbReset() {
  //evi
  document.getElementById("Banshee").style.display = "";
  document.getElementById("Spirit").style.display = "";
  document.getElementById("Wraith").style.display = "";
  document.getElementById("Revenant").style.display = "";
  document.getElementById("Demon").style.display = "";
  document.getElementById("Oni").style.display = "";
  //str
  document.getElementById("Banshee-str").style.display = "";
  document.getElementById("Spirit-str").style.display = "";
  document.getElementById("Wraith-str").style.display = "";
  document.getElementById("Revenant-str").style.display = "";
  document.getElementById("Demon-str").style.display = "";
  document.getElementById("Oni-str").style.display = "";
  //buttons
  document.getElementById("ghost-orb").style.backgroundColor = "";
  document.getElementById("ghost-orb").style.color = "";
  var ghostOrbs = document.getElementsByClassName("Ghost Orb");
  for (const element of ghostOrbs) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function freTemp() {
  //evi
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  //str
  document.getElementById("Poltergeist-str").style.display = "none";
  document.getElementById("Jinn-str").style.display = "none";
  document.getElementById("Spirit-str").style.display = "none";
  document.getElementById("Revenant-str").style.display = "none";
  document.getElementById("Shade-str").style.display = "none";
  document.getElementById("Oni-str").style.display = "none";
  //buttons
  document.getElementById("freezing-temps").style.backgroundColor = "#f8f8ff";
  document.getElementById("freezing-temps").style.color = "#000000";
  var freezey = document.getElementsByClassName("Freezing Temperatures");
  for (const element of freezey) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function freTempReset() {
  //evi
  document.getElementById("Poltergeist").style.display = "";
  document.getElementById("Jinn").style.display = "";
  document.getElementById("Spirit").style.display = "";
  document.getElementById("Revenant").style.display = "";
  document.getElementById("Shade").style.display = "";
  document.getElementById("Oni").style.display = "";
  //str
  document.getElementById("Poltergeist-str").style.display = "";
  document.getElementById("Jinn-str").style.display = "";
  document.getElementById("Spirit-str").style.display = "";
  document.getElementById("Revenant-str").style.display = "";
  document.getElementById("Shade-str").style.display = "";
  document.getElementById("Oni-str").style.display = "";
  //buttons
  document.getElementById("freezing-temps").style.backgroundColor = "";
  document.getElementById("freezing-temps").style.color = "";
  var freezey = document.getElementsByClassName("Freezing Temperatures");
  for (const element of freezey) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function finPrnt() {
  //evi
  document.getElementById("Jinn").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Yurei").style.display = "none";
  document.getElementById("Oni").style.display = "none";
  //str
  document.getElementById("Jinn-str").style.display = "none";
  document.getElementById("Phantom-str").style.display = "none";
  document.getElementById("Mare-str").style.display = "none";
  document.getElementById("Shade-str").style.display = "none";
  document.getElementById("Demon-str").style.display = "none";
  document.getElementById("Yurei-str").style.display = "none";
  document.getElementById("Oni-str").style.display = "none";
  //buttons
  document.getElementById("fingerprint").style.backgroundColor = "#f8f8ff";
  document.getElementById("fingerprint").style.color = "#000000";
  var fingeys = document.getElementsByClassName("Fingerprints");
  for (const element of fingeys) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function finPrntReset() {
  //evi
  document.getElementById("Jinn").style.display = "";
  document.getElementById("Phantom").style.display = "";
  document.getElementById("Mare").style.display = "";
  document.getElementById("Shade").style.display = "";
  document.getElementById("Demon").style.display = "";
  document.getElementById("Yurei").style.display = "";
  document.getElementById("Oni").style.display = "";
  //str
  document.getElementById("Jinn-str").style.display = "";
  document.getElementById("Phantom-str").style.display = "";
  document.getElementById("Mare-str").style.display = "";
  document.getElementById("Shade-str").style.display = "";
  document.getElementById("Demon-str").style.display = "";
  document.getElementById("Yurei-str").style.display = "";
  document.getElementById("Oni-str").style.display = "";
  //buttons
  document.getElementById("fingerprint").style.backgroundColor = "";
  document.getElementById("fingerprint").style.color = "";
  var fingeys = document.getElementsByClassName("Fingerprints");
  for (const element of fingeys) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function emfFive() {
  //evi
  document.getElementById("Poltergeist").style.display = "none";
  document.getElementById("Spirit").style.display = "none";
  document.getElementById("Wraith").style.display = "none";
  document.getElementById("Mare").style.display = "none";
  document.getElementById("Demon").style.display = "none";
  document.getElementById("Yurei").style.display = "none";
  //str
  document.getElementById("Poltergeist-str").style.display = "none";
  document.getElementById("Spirit-str").style.display = "none";
  document.getElementById("Wraith-str").style.display = "none";
  document.getElementById("Mare-str").style.display = "none";
  document.getElementById("Demon-str").style.display = "none";
  document.getElementById("Yurei-str").style.display = "none";
  //buttons
  document.getElementById("emf-five").style.backgroundColor = "#f8f8ff";
  document.getElementById("emf-five").style.color = "#000000";
  var emfive = document.getElementsByClassName("EMF Level 5");
  for (const element of emfive) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function emfFiveReset() {
  //evi
  document.getElementById("Poltergeist").style.display = "";
  document.getElementById("Spirit").style.display = "";
  document.getElementById("Wraith").style.display = "";
  document.getElementById("Mare").style.display = "";
  document.getElementById("Demon").style.display = "";
  document.getElementById("Yurei").style.display = "";
  //str
  document.getElementById("Poltergeist-str").style.display = "";
  document.getElementById("Spirit-str").style.display = "";
  document.getElementById("Wraith-str").style.display = "";
  document.getElementById("Mare-str").style.display = "";
  document.getElementById("Demon-str").style.display = "";
  document.getElementById("Yurei-str").style.display = "";
  //buttons
  document.getElementById("emf-five").style.backgroundColor = "";
  document.getElementById("emf-five").style.color = "";
  var emfive = document.getElementsByClassName("EMF Level 5");
  for (const element of emfive) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function spiritBox() {
  //evi
  document.getElementById("Banshee").style.display = "none";
  document.getElementById("Phantom").style.display = "none";
  document.getElementById("Revenant").style.display = "none";
  document.getElementById("Shade").style.display = "none";
  //str
  document.getElementById("Banshee-str").style.display = "none";
  document.getElementById("Phantom-str").style.display = "none";
  document.getElementById("Revenant-str").style.display = "none";
  document.getElementById("Shade-str").style.display = "none";
  //buttons
  document.getElementById("spiritbox").style.backgroundColor = "#f8f8ff";
  document.getElementById("spiritbox").style.color = "#000000";
  var sprite = document.getElementsByClassName("Spirit Box");
  for (const element of sprite) {
    element.style.backgroundColor = "#DFF2BF";
    element.style.color = "#000000";
  }
}

function spiritBoxReset() {
  //evi
  document.getElementById("Banshee").style.display = "";
  document.getElementById("Phantom").style.display = "";
  document.getElementById("Revenant").style.display = "";
  document.getElementById("Shade").style.display = "";
  //str
  document.getElementById("Banshee-str").style.display = "";
  document.getElementById("Phantom-str").style.display = "";
  document.getElementById("Revenant-str").style.display = "";
  document.getElementById("Shade-str").style.display = "";
  //buttons
  document.getElementById("spiritbox").style.backgroundColor = "";
  document.getElementById("spiritbox").style.color = "";
  var sprite = document.getElementsByClassName("Spirit Box");
  for (const element of sprite) {
    element.style.backgroundColor = "";
    element.style.color = "";
  }
}

function submitobj() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
  for (var checkbox of checkboxes) {
    document.getElementById(checkbox.id + '2').style.display = "none"
    // console.log(checkbox.id + '2')
  }
}

function resetobj() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
  for (var checkbox of checkboxes) {
    document.getElementById(checkbox.id + '2').style.display = ""
    // console.log(checkbox.id + '2')
  }
}