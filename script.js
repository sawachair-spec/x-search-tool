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

navigator.clipboard.writeText(query)

alert("コピーしました")

}

function analyzeGPT(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

let prompt="次のX検索結果を分析してください\n"+url

let gpt="https://chat.openai.com/?q="+encodeURIComponent(prompt)

window.open(gpt)

}

function analyzeGrok(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

let prompt="このX検索結果を分析してください\n"+url

let grok="https://x.com/i/grok?text="+encodeURIComponent(prompt)

window.open(grok)

}

function toggleDark(){

document.body.classList.toggle("dark")

}
