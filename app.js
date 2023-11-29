




let getData = () => {
    return new Promise((resolve, reject) => {

        fetch(`https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=pk&max=100&apikey=dc7a00a6d7bb3cca6df36f75995c8fc1`)
        // fetch(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=2ce39e8b53304f62ba89a32618301f95`)

            .then(data => data.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => reject(err))
    })
}


let satDataToHtml = async () => {
    const data = await getData();
    console.log(data)

}
satDataToHtml()