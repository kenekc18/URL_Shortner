let url_link = document.querySelector('#url');
let button = document.querySelector('#btn');
let result_link = document.querySelector('.result-url')
let apiUrl = "https://api-ssl.bitly.com/v4/shorten";

async function shorten(url){
    try{
        let new_links = await fetch(apiUrl,{
            method: "POST",
            body: JSON.stringify({url:url}),
            headers: {
                "Authorization": "Bearer {2d1e5578739c50899d1ecb478281d507b4b860d3}",
                "Content-type":"application/json"
            }
        });
        result_link.style.display = "block";

        // IF HTTP REQUEST IS SUCESSFUL(DATA IS SUCESSFULLY GOTTEN)
        if(new_links.ok){
            let data = await new_links.text();
            result_link.innerHTML = `<a href ="${data}" target ="blank">${data}</a>`
        }    
        else{
            result_link.innerHTML = "The link could not be shortned"
            result_link.style.color = "red";
        }
        // ELSE CONDITION RUNS IF HTTP REQUEST FAILED
      
    }catch(error){
        console.error('Error during fetch', error)
        result_link.innerHTML = "Error occured while link was being shortened"
    }
}

button.addEventListener('click',()=>{
    shorten(url_link.value)
});                                                                                                                                                                                                                                                      