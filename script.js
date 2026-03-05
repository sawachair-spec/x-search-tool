document.addEventListener("DOMContentLoaded", function(){

function buildQuery(){

let query=""

let keyword=document.getElementById("keyword").value
let exact=document.getElementById("exact").value
let or=document.getElementById("or").value
let exclude=document.getElementById("exclude").value
let user=document.getElementById("user").value
let hashtag=document.getElementById("hashtag").value

if(keyword) query+=" "+keyword
if(exact) query+=' "'+exact+'"'
if(or) query+=" ("+or.replace(/ /g," OR ")+")"
if(exclude) query+=" -"+exclude
if(user) query+=" from:"+user
if(hashtag) query+=" "+hashtag

let like=document.getElementById("like").value
let rt=document.getElementById("rt").value
let reply=document.getElementById("replyCount").value

if(like) query+=" min_faves:"+like
if(rt) query+=" min_retweets:"+rt
if(reply) query+=" min_replies:"+reply

let since=document.getElementById("since").value
let until=document.getElementById("until").value

if(since) query+=" since:"+since
if(until) query+=" until:"+until

if(document.getElementById("image").checked) query+=" filter:images"
if(document.getElementById("video").checked) query+=" filter:videos"
if(document.getElementById("link").checked) query+=" filter:links"
if(document.getElementById("noRT").checked) query+=" -filter:retweets"

document.getElementById("queryBox").innerText=query

return query
}

function searchX(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)+"&f=live"

window.open(url)

}

function copyQuery(){

let query=buildQuery()

navigator.clipboard.writeText(query)

alert("コピーしました")

}

function downloadQuery(){

let query=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(query)

let blob=new Blob([url])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="x-search.txt"

a.click()

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

let btn=document.getElementById("darkToggle")

if(document.body.classList.contains("dark")){
btn.innerText="☀"
}else{
btn.innerText="🌙"
}

}


document.getElementById("searchBtn").onclick=searchX
document.getElementById("copyBtn").onclick=copyQuery
document.getElementById("saveBtn").onclick=downloadQuery
document.getElementById("gptBtn").onclick=analyzeGPT
document.getElementById("grokBtn").onclick=analyzeGrok
document.getElementById("darkToggle").onclick=toggleDark

})
