let page = 1
btn = document.querySelector('#btn')
async function getAll(event) {
    console.log('click button');
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    console.log(res);
    page++;
    if (res.status < 300) {
        const data = await res.json()
        console.log(data.results);
        for (const iteratior of data.results) {
            const div = document.createElement("div")
            div.classList.add("char-div");
            const image = document.createElement("img")
            image.classList.add("char-image")
            const p = document.createElement("p")
            p.classList.add("char-p")
          
          

            p.innerHTML = iteratior.name
            image.src = iteratior.image

            div.append(image)
            div.append(p)
         
        
            document.querySelector(".main-div").append(div)

            
  
                

        }
    }
    
}



let scrollButton = document.getElementById('scroll-button');
let scrolling = false;
function ScrollButton() {
  if (!scrolling) {
    scrolling = setInterval(function() {
      window.scrollBy(0, 5); 
    }, 30);
  } else {

    clearInterval(scrolling);
    scrolling = false;
  }
}


scrollButton.addEventListener('click', ScrollButton);
document.addEventListener("DOMContentLoaded", function(event) {
    getAll()
  });
  
  
window.addEventListener('scroll', async function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      await getAll();
    }
  });
  
  









