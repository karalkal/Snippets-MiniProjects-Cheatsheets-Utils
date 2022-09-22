let form = document.getElementById('searchForm')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = new FormData()
    let searchTerm1 = formData.get('searchTerm')

    let searchTerm = form.querySelector('#searchTerm').value
    console.log(searchTerm, searchTerm1)

    console.log(formData);
    fetchData(searchTerm)
})
function fetchData(searchTerm) {
    let url = "https://en.wikipedia.org/w/api.php";

    let params = {
        action: "query",
        list: "search",
        srsearch: searchTerm,
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    // adds key/value pairs to query like this k=v&k=v&k=v

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))

        .catch(function (error) { console.log(`${error.name}:\n${error.message}`); });
}
