const knowledge = {
billing: {
"Make Payment": {
title: "Make Payment",
content: ` <h2>Make Payment</h2> <h3>Things to Check</h3> <ul> <li>Check card expiration date</li> <li>Verify last four digits of the card</li> </ul>

```
    <h3>What To Do</h3>
    <ul>
      <li>Payments are processed using saved card details.</li>
      <li>Active subscriptions are billed automatically each month.</li>
    </ul>
  `
},

"Refund": {
  title: "Refund",
  content: `
    <h2>Refund</h2>
    <h3>Things to Check</h3>
    <ul>
      <li>Verify refund reason</li>
      <li>Check timestamps</li>
      <li>Validate request</li>
    </ul>

    <h3>What To Do</h3>
    <ul>
      <li>Obtain approval before processing.</li>
      <li>Inform customer refunds can take 7–10 business days.</li>
    </ul>
  `
}
```

},

network: {
"Slow Speeds": {
title: "Slow Speeds",
content: ` <h2>Slow Speeds</h2>

```
    <h3>Checks</h3>
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
      <li>Escalate if issue persists</li>
    </ol>
  `
},

"Activation": {
  title: "Activation",
  content: `
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
      <li>Verify compatibility</li>
      <li>Verify UK purchase</li>
      <li>Update software</li>
      <li>Restart device</li>
    </ul>
  `
}
```

},

porting: {},
account: {},
logistics: {},
device: {},
cancel: {}
};

function loadCategory(category) {
const articleList = document.getElementById("articleList");

if (!knowledge[category]) {
articleList.innerHTML = "No articles found.";
return;
}

let html = "";

Object.keys(knowledge[category]).forEach(article => {
html += `       <button
        class="article-item"
        onclick="loadArticle('${category}', '${article}')">
        ${article}       </button>
    `;
});

articleList.innerHTML =
html || "<p>No articles available.</p>";
}

function loadArticle(category, article) {
const item = knowledge[category]?.[article];

if (!item) return;

document.getElementById("articleTitle").innerHTML =
item.title;

document.getElementById("articleContent").innerHTML =
item.content;
}

function searchArticles() {
const search = document
.getElementById("searchBox")
.value
.toLowerCase()
.trim();

let html = "";

Object.keys(knowledge).forEach(category => {
Object.keys(knowledge[category]).forEach(article => {
if (article.toLowerCase().includes(search)) {
html += `           <button
            class="article-item"
            onclick="loadArticle('${category}', '${article}')">
            ${article}           </button>
        `;
}
});
});

document.getElementById("articleList").innerHTML =
html || "<p>No matching articles found.</p>";
}

let editMode = false;

function toggleEditor() {
const editor =
document.getElementById("articleContent");

editMode = !editMode;

editor.contentEditable = editMode;

document.querySelector(".edit-btn").innerText =
editMode ? "Save" : "Edit";
}

function formatText(command) {
document.execCommand(command);
}