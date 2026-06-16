const knowledge = {

billing:{

"Make Payment":{
title:"Make Payment",
content:`
<h2>Make Payment</h2>

<h3>Things to Check</h3>

<ul>
<li>Check card expiration date</li>
<li>Verify last four digits of the card</li>
</ul>

<h3>What To Do</h3>

<ul>
<li>Payments are processed via saved card details or by entering new payment information at checkout.</li>
<li>Active subscriptions are billed automatically every month.</li>
</ul>
`
},

"Customer Can't Pay":{
title:"Customer Can't Pay",
content:`
<h2>Customer Can't Pay</h2>

<h3>Things to Check</h3>

<ul>
<li>Check card expiration date</li>
<li>Review error message</li>
<li>Review transaction history</li>
</ul>

<h3>What To Do</h3>

<ul>
<li>Advise payments are processed using card details on file.</li>
<li>If customer requests Promise To Pay, submit feedback.</li>
</ul>
`
},

"Refund":{
title:"Refund",
content:`
<h2>Refund</h2>

<h3>Things to Check</h3>

<ul>
<li>Verify refund reason</li>
<li>Check timestamps</li>
<li>Validate request</li>
</ul>

<h3>What To Do</h3>

<ul>
<li>Ask support for approval.</li>
<li>Process refund if approved.</li>
<li>Advise customer refund takes 7-10 business days.</li>
</ul>
`
}

},

network:{

"Slow Speeds":{
title:"Slow Speeds",
content:`
<h2>Slow Speeds</h2>

<h3>Things To Check</h3>

<ul>
<li>Account status</li>
<li>Coverage period</li>
<li>Signal strength</li>
<li>Device model</li>
<li>Customer location</li>
</ul>

<h3>Troubleshooting</h3>

<ol>
<li>Run speed test</li>
<li>Optimize connection</li>
<li>Reboot device</li>
<li>Collect customer location</li>
<li>Escalate if issue persists</li>
</ol>
`
},

"Activation":{
title:"Activation",
content:`
<h2>Activation</h2>

<h3>Loop Device</h3>

<ol>
<li>Complete Android setup</li>
<li>Tap activation widget</li>
<li>Scan QR code</li>
<li>Enter activation code</li>
</ol>

<h3>eSIM</h3>

<ul>
<li>Confirm compatibility</li>
<li>Verify UK purchase</li>
<li>Update device software</li>
<li>Restart device</li>
</ul>
`
},

"Transfer eSIM":{
title:"Transfer eSIM",
content:`
<h2>Transfer eSIM</h2>

<h3>Checks</h3>

<ul>
<li>Confirm eSIM removed from old phone</li>
<li>Verify device supports eSIM</li>
<li>Verify UK device</li>
</ul>

<h3>Steps</h3>

<ol>
<li>Delete eSIM from old phone</li>
<li>Open LoopDL App</li>
<li>Sign in</li>
<li>Select Install eSIM</li>
<li>Follow instructions</li>
</ol>
`
}

}

};

function loadCategory(category){

const articleList =
document.getElementById("articleList");

let html = "";

for(const article in knowledge[category]){

html += `
<button
class="article-item"
onclick="loadArticle('${category}','${article}')">

${article}

</button>
`;

}

articleList.innerHTML = html;

}

function loadArticle(category,article){

document.getElementById("articleTitle")
.innerHTML =
knowledge[category][article].title;

document.getElementById("articleContent")
.innerHTML =
knowledge[category][article].content;

}

function searchArticles(){

const search =
document
.getElementById("searchBox")
.value
.toLowerCase();

let html = "";

for(const category in knowledge){

for(const article in knowledge[category]){

if(
article
.toLowerCase()
.includes(search)
){

html += `
<button
class="article-item"
onclick="loadArticle('${category}','${article}')">

${article}

</button>
`;

}

}

}

document.getElementById("articleList")
.innerHTML = html;

}

let editMode = false;

function toggleEditor(){

const editor =
document.getElementById(
"articleContent"
);

editMode = !editMode;

editor.contentEditable =
editMode;

document.querySelector(
".edit-btn"
).innerText =
editMode
? "Save"
: "Edit";

}

function formatText(command){

document.execCommand(command);

}
```
