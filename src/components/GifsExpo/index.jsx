const GifsExpo= ({categories = []} ) => {
    let getGifs = (categories ) => {
        const gifsList = []

        categories.forEach(async (category)=>{
        const response = await fetch (
         `https://api.giphy.com/v1/gifs/search?api_key=wS0Wxs0FN0c3gVE3yrVSHlCmT40M7W3G&q=${categories}&limit10`
            )
        const apiResponse = await response.json()
        gifsList =apiResponse.data.map((gif)=>{
            return gif.images.fixed_width.url
        })
       
        } )
        console.log(gifsList)

            }
    getGifs(categories)
    
    return(
        <h4> GifsExpo</h4>
    )
}
export default GifsExpo