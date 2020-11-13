const url = './ghost.json'
const ghostTable = document.getElementById('ghost-table')

function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

fetch(url)
    .then(resp => resp.json())
    .then(function (ghostsList) {
        return ghostsList.map(function (ghosts) {
            let tr = createNode("tr"),
                tdName = createNode("td"),
                tdStr = createNode("td"),
                tdWeak = createNode("td"),
                tdEviOne = createNode("td"),
                tdEviTwo = createNode("td"),
                tdEviThree = createNode("td");
            tr.id = `${ghosts.name}`
            tdName.innerHTML = `${ghosts.name}`
            tdStr.innerHTML = `${ghosts.strength}`
            tdWeak.innerHTML = `${ghosts.weakness}`
            tdEviOne.innerHTML = `${ghosts.evidence[0]}`
            tdEviTwo.innerHTML = `${ghosts.evidence[1]}`
            tdEviThree.innerHTML = `${ghosts.evidence[2]}`
            append(tr, tdName)
            append(tr, tdStr)
            append(tr, tdWeak)
            append(tr, tdEviOne)
            append(tr, tdEviTwo)
            append(tr, tdEviThree)
            append(ghostTable, tr)
        })
    })

function resetSelection() {
    document.getElementById("Poltergeist").style.display = ""
    document.getElementById("Banshee").style.display = ""
    document.getElementById("Jinn").style.display = ""
    document.getElementById("Wraith").style.display = ""
    document.getElementById("Phantom").style.display = ""
    document.getElementById("Mare").style.display = ""
    document.getElementById("Spirit").style.display = ""
    document.getElementById("Revenant").style.display = ""
    document.getElementById("Shade").style.display = ""
    document.getElementById("Demon").style.display = ""
    document.getElementById("Yurei").style.display = ""
    document.getElementById("Oni").style.display = ""
}

function ghostWriting() {
    document.getElementById("Poltergeist").style.display = "none"
    document.getElementById("Banshee").style.display = "none"
    document.getElementById("Jinn").style.display = "none"
    document.getElementById("Wraith").style.display = "none"
    document.getElementById("Phantom").style.display = "none"
    document.getElementById("Mare").style.display = "none"
}

function ghostOrb() {
    document.getElementById("Banshee").style.display = "none"
    document.getElementById("Spirit").style.display = "none"
    document.getElementById("Wraith").style.display = "none"
    document.getElementById("Revenant").style.display = "none"
    document.getElementById("Demon").style.display = "none"
    document.getElementById("Yurei").style.display = "none"
    document.getElementById("Oni").style.display = "none"
}

function freTemp() {
    document.getElementById("Poltergeist").style.display = "none"
    document.getElementById("Jinn").style.display = "none"
    document.getElementById("Spirit").style.display = "none"
    document.getElementById("Revenant").style.display = "none"
    document.getElementById("Shade").style.display = "none"
    document.getElementById("Oni").style.display = "none"
}

function finPrnt() {
    document.getElementById("Jinn").style.display = "none"
    document.getElementById("Phantom").style.display = "none"
    document.getElementById("Mare").style.display = "none"
    document.getElementById("Shade").style.display = "none"
    document.getElementById("Demon").style.display = "none"
    document.getElementById("Yurei").style.display = "none"
    document.getElementById("Oni").style.display = "none"
}

function emfFive() {
    document.getElementById("Poltergeist").style.display = "none"
    document.getElementById("Spirit").style.display = "none"
    document.getElementById("Wraith").style.display = "none"
    document.getElementById("Mare").style.display = "none"
    document.getElementById("Demon").style.display = "none"
    document.getElementById("Yurei").style.display = "none"
}

function spiritBox() {
    document.getElementById("Banshee").style.display = "none"
    document.getElementById("Phantom").style.display = "none"
    document.getElementById("Revenant").style.display = "none"
    document.getElementById("Shade").style.display = "none"
}