function buildQuery(){  
  
let query=""  
  
let user=document.getElementById("user").value  
let keyword=document.getElementById("keyword").value  
let exact=document.getElementById("exact").value  
let exclude=document.getElementById("exclude").value  
let or=document.getElementById("or").value  
let hashtag=document.getElementById("hashtag").value  
  
if(user) query+=` from:${user}`  
if(keyword) query+=` ${keyword}`  
if(exact) query+=` "${exact}"`  
if(exclude) query+=` -${exclude}`  
if(or) query+=` (${or.replace(/ /g," OR ")})`  
if(hashtag) query+=` ${hashtag}`  
  
let like=document.getElementById("like").value  
let rt=document.getElementById("rt").value  
let reply=document.getElementById("replyCount").value  
  
if(like) query+=` min_faves:${like}`  
if(rt) query+=` min_retweets:${rt}`  
if(reply) query+=` min_replies:${reply}`  
  
let since=document.getElementById("since").value  
let until=document.getElementById("until").value  
  
if(since) query+=` since:${since}`  
if(until) query+=` until:${until}`  
  
document.getElementById("queryBox").innerText=query
  
return query  
}  
  
function searchX(){  
  
let query=buildQuery()  
  
let url="https://x.com/search?q="+encodeURIComponent(query)+"&f=live"  
  
saveHistory(url)  
  
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
  
let prompt=`次のX検索結果を分析してください\n${url}`  
  
let gpt="https://chat.openai.com/?q="+encodeURIComponent(prompt)  
  
window.open(gpt)  
  
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
  
history.slice(0,10).forEach(h=>{  
  
let li=document.createElement("li")  
  
li.innerHTML=`<a href="${h}" target="_blank">${h}</a>`  
  
ul.appendChild(li)  
  
})  
  
}  
  
renderHistory()  
