let form = document.getElementById('searchForm')
let foundDiv = document.getElementById('found')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // let searchTerm1 = form.querySelector('#searchTerm').value

    let formData = new FormData(form)
    let searchTerm = formData.get('searchTerm')

    form.reset()

    fetchData(searchTerm)
})
function fetchData(searchTerm) {
    let url = "https://en.wikipedia.org/w/api.php";

    let params = {
        action: "query",
        list: "search",
        srsearch: searchTerm,
        format: "json",
        srlimit: 44
    }; // how many search results

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    // adds key/value pairs to query like this k=v&k=v&k=v

    fetch(url)
        .then(response => response.json())
        .then(filterData)

        .catch(function (error) { console.log(`${error.name}:\n${error.message}`); });
}

function filterData(foundData) {
    let result = ''

    for (let foundArticle of foundData.query.search) {
        let articleTitle = foundArticle.title
        let articleSnippet = foundArticle.snippet

        console.log(articleTitle)
        if (articleTitle.includes('album') || articleSnippet.includes('album')) {
            result = foundArticle
            break
        }
    }
    // if none of the results contains 'album'
    displayResult(result)
}

function displayResult(result) {
    if (!result) {
        foundDiv.textContent = 'No results found'
    } else {
        foundDiv.innerHTML = result.snippet
        console.log(result)
    }
}
