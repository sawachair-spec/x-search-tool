function buildQuery(){

let q=""

let keyword=document.getElementById("keyword").value
let exact=document.getElementById("exact").value
let or=document.getElementById("or").value
let exclude=document.getElementById("exclude").value
let user=document.getElementById("user").value
let hashtag=document.getElementById("hashtag").value

if(keyword) q+=" "+keyword
if(exact) q+=' "'+exact+'"'
if(or) q+=" ("+or.replace(/ /g," OR ")+")"
if(exclude) q+=" -"+exclude

if(user) q+=" from:"+user
if(hashtag) q+=" "+hashtag

let like=document.getElementById("like").value
let rt=document.getElementById("rt").value
let reply=document.getElementById("reply").value

if(like) q+=" min_faves:"+like
if(rt) q+=" min_retweets:"+rt
if(reply) q+=" min_replies:"+reply

let since=document.getElementById("since").value
let until=document.getElementById("until").value

if(since) q+=" since:"+since
if(until) q+=" until:"+until

if(document.getElementById("image").checked) q+=" filter:images"
if(document.getElementById("video").checked) q+=" filter:videos"
if(document.getElementById("link").checked) q+=" filter:links"
if(document.getElementById("noRT").checked) q+=" -filter:retweets"

document.getElementById("queryBox").innerText=q

return q

}



function searchX(){

let q=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(q)+"&f=live"

saveHistory(url)

window.open(url)

}



function copyQuery(){

let q=buildQuery()

navigator.clipboard.writeText(q)

alert("コピーしました")

}



function downloadQuery(){

let q=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(q)

let blob=new Blob([url])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="x-search.txt"

a.click()

}



function analyzeGPT(){

let q=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(q)

let prompt="次のX検索結果を分析してください\n"+url

let gpt="https://chat.openai.com/?q="+encodeURIComponent(prompt)

window.open(gpt)

}



function analyzeGrok(){

let q=buildQuery()

let url="https://x.com/search?q="+encodeURIComponent(q)

let prompt="このX検索結果を分析してください\n"+url

let grok="https://x.com/i/grok?text="+encodeURIComponent(prompt)

window.open(grok)

}



function toggleDark(){

document.body.classList.toggle("dark")

}



function saveHistory(url){

let history=JSON.parse(localStorage.getItem("history")||"[]")

history.unshift(url)

localStorage.setItem("history",JSON.stringify(history))

renderHistory()

}



function renderHistory(){

let history=JSON.parse(localStorage.getItem("history")||"[]")

let ul=document.getElementById("history")

ul.innerHTML=""

history.slice(0,10).forEach(function(h,i){

let li=document.createElement("li")

li.innerHTML='<a href="'+h+'" target="_blank">'+h+'</a> <button onclick="deleteHistory('+i+')">削除</button>'

ul.appendChild(li)

})

}



function deleteHistory(i){

let history=JSON.parse(localStorage.getItem("history")||"[]")

history.splice(i,1)

localStorage.setItem("history",JSON.stringify(history))

renderHistory()

}



function clearHistory(){

localStorage.removeItem("history")

renderHistory()

}



function setupRealtime(){

let inputs=document.querySelectorAll("input")

inputs.forEach(function(el){

el.addEventListener("input",buildQuery)

})

}



setupRealtime()

renderHistory()
