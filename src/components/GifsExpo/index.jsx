import { useState } from "react"

const GifsExpo= ({categories = []} ) => {
    const [urlList,setUrlList] = useState([])
    const getGifs = async (categories ) => {
     //   let    gifsList = []

       const responsesList= await Promise.all(categories.map(async (category)=>{
        const response = await fetch (
         `https://api.giphy.com/v1/gifs/search?api_key=wS0Wxs0FN0c3gVE3yrVSHlCmT40M7W3G&q=${categories}&limit10`
            )
        const apiResponse = await response.json()
        return apiResponse.data
        //gifsList =apiResponse.data.map((gif)=>{
          //  return gif.images.fixed_width.url
        //})
        
       
        }))
        let gifsList =[]
         responsesList.forEach((data)=>{
            data.forEach((item) =>{
                gifsList = [...gifsList,item.images.fixed_width.url.split('?')[0]]

            })
         })
        
        setUrlList([...gifsList])

            }
    getGifs(categories)


    
    return(
        <>
        <h4> GifsExpo</h4>
        <ol>
            {
             urlList.map((url) => {
                return (
                <li key={url}>{url}</li>
                )
             })     
            }
               </ol>
               </>
    )
}
export default GifsExpo