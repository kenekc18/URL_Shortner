let url_link = document.querySelector('.input');
let button = document.querySelector('#btn');
let result_link = document.querySelector('.result-url')
let apiUrl = "https://rel.ink/api/links/";

async function shorten(url){
    try{
    
        let new_links = await fetch(apiUrl,{
            method: "POST",
            body: JSON.stringify({url:url}),
            headers: {"Content-type":"application/json"}
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