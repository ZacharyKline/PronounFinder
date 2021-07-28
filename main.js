let results = document.querySelector('#results')
let pronouns = ["i", "you", "she", 'her', "he", 'his', "it", "we", "they", 'them']
let pronounObj = {}
function findPronouns(text) {
	let filteredText = text.replace(/[^\w\s]/gi, "");
	let splitWords = filteredText.split(" ");
	splitWords.forEach(buildObj);
	console.log(pronounObj);
	let entries = Object.entries(pronounObj);
    let sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    if (sortedEntries.length === 0) {
        document.body.append("No pronouns your soul is safe")
        return
    } 
        let showNouns = document.createElement('h3')
        showNouns.innerHTML = 'There are pronouns, our souls are doomed.'
        results.append(showNouns)
        
}

function buildObj(word) {
    let lowerWord = word.toLowerCase()
    if (pronouns.includes(lowerWord)) {
        if (pronounObj[lowerWord] === undefined) {
            pronounObj[lowerWord] = 1;
        } else {
            pronounObj[lowerWord] += 1;
        }
        return pronounObj;
    }
}



findPronouns(bible)


// 	// Get the top 10, and print them on the page
// 	let tagTen = document.createElement("h2");
// 	tagTen.innerHTML = "Top ten tags";
// 	main.append(tagTen);
// 	let ordered = document.createElement("ol");
// 	main.append(ordered);
// 	for (let i = 0; i < 10; i += 1) {
// 		let listItem = document.createElement("li");
// 		listItem.innerHTML = `${entries[i][0]} found ${entries[i][1]} times`;
// 		ordered.append(listItem);
// 	}
// }