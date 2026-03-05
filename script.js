function buildQuery(){

let keyword=document.getElementById("keyword").value

document.getElementById("queryBox").innerText=keyword

return keyword

}

function searchX(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

window.open(url)

}

function copyQuery(){

let query=buildQuery()

alert(query)

}

function analyzeGPT(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

window.open("https://chat.openai.com")

}

function analyzeGrok(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

window.open("https://x.com/i/grok")

}

function toggleDark(){

document.body.classList.toggle("dark")

}
