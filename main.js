let results = document.querySelector("#results");
let bookTitle = document.createElement('h3')
bookTitle.innerHTML = title
document.body.append(bookTitle)
let pronouns = [
	"i",
	"you",
	"she",
	"her",
	"he",
	"his",
	"it",
	"we",
	"they",
	"them",
];
let pronounObj = {};
function findPronouns(text) {
	let filteredText = text.replace(/[^\w\s]/gi, "");
	let splitWords = filteredText.split(" ");
	splitWords.forEach(buildObj);
	console.log(pronounObj);
	let entries = Object.entries(pronounObj);
	let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
	if (sortedEntries.length === 0) {
		document.body.append("No pronouns your soul is safe");
		document.body.classList.add("heavenly");
		return;
	} else {
		let showNouns = document.createElement("h3");
		showNouns.innerHTML = "There are pronouns, our souls are doomed.";
		results.append(showNouns);
        document.body.classList.add("demonic");
        let parentDiv = document.createElement('div')
        parentDiv.classList.add('parent')
        document.body.append(parentDiv)
        let total = 0
		sortedEntries.forEach((entry) => {
			let listItem = document.createElement("div");
			listItem.innerHTML = `"${entry[0]}" was found ${entry[1]} times`;
            parentDiv.append(listItem)
            total += entry[1]
		});
        console.log(total)
        let totalDiv = document.createElement('div')
        totalDiv.innerHTML = `Total number of sin: <strong><u>${total}`
        document.body.append(totalDiv)
	}
}

function buildObj(word) {
	let lowerWord = word.toLowerCase();
	if (pronouns.includes(lowerWord)) {
		if (pronounObj[lowerWord] === undefined) {
			pronounObj[lowerWord] = 1;
		} else {
			pronounObj[lowerWord] += 1;
		}
		return pronounObj;
	}
}

findPronouns(bible);


