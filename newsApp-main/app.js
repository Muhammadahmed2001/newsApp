let getData = () => {
    return new Promise((resolve, reject) => {

        fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ce39e8b53304f62ba89a32618301f95`)
            // fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ce39e8b53304f62ba89a32618301f95`)

            .then(data => data.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })
}

let newsCard = document.getElementById("newsCard")
let satDataToHtml = async () => {
    const data = await getData();
    for (let i = 0; i < data.articles.length; i++) {

        newsCard.innerHTML += `
        <div class="col">
        <div class="card">
            <img src="${data.articles[i].urlToImage}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">AMD Ryzen Z1 mini PC proves dynamite comes in small packages</h4>
                <h6 class="card-title">YouTuber ETA Prime unveiled the very first AMD Ryzen Z1 mini PC prototype
                    revealing specs, benchmarks, and more.</h6>
                <p class="card-text">"AMD’s Ryzen Z1 APU has become increasingly popular in the handheld PC
                    gaming market. It turns out there’s a prototype Ryzen Z1 mini PC that could offer users a
                    compact and versatile computing solution. With the added benefit of a larger form factor
                    t... [2504 chars]</p>
                <p class="card-text"><small class="text-muted">published At : <span>2023-11-29 <b>12:03</b></span></small></p>
                <a target="_blank" href="https://www.club386.com/amd-ryzen-z1-mini-pc-proves-dynamite-comes-in-small-packages/">for more details click here...</a>
            </div>
        </div>
    </div>
        `
    }
    console.log(data.articles[0].urlToImage)
    console.log(data)

}
satDataToHtml()