let getData = () => {
    return new Promise((resolve, reject) => {

        fetch(`https://gnews.io/api/v4/search?q=example&lang=en&country=pk&max=10&apikey=dc7a00a6d7bb3cca6df36f75995c8fc1`)
            // fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ce39e8b53304f62ba89a32618301f95`)

            .then(data => data.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })
}
let newsImg = document.getElementById("newsImg")
let newsCard = document.getElementById("newsCard")
let satDataToHtml = async () => {
    const data = await getData();
    for (let i = 0; i < data.articles.length; i++) {
      const imgUrl = data.articles[i].image !== null ? data.articles[i].image : "https://raysensenbach.com/wp-content/uploads/2013/04/default.jpg"

        newsCard.innerHTML += `
        <div class="col">
        <div class="card h-100">
            <img id="newsImg" src="${imgUrl}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${data.articles[i].title}</h4>
                <h6 class="card-title">${data.articles[i].description}</h6>
                <p class="card-text">${data.articles[i].content}</p>
                <p class="card-text"><small class="text-muted">published At : <span>${data.articles[i].publishedAt.slice(0,10)}<b> ${data.articles[i].publishedAt.slice(11,16)}</b></span></small></p>
                <a target="_blank" href="${data.articles[i].url}">for more details click here...</a>
            </div>
        </div>
    </div>
        `
    }
    // console.log(data.articles[0].url)
    // console.log(data)

}
satDataToHtml()