let button = document.querySelector('button')

 let h1 = document.querySelector('h1');

 let h3 = document.querySelector('h3')

 let tag = document.querySelector('.badge')

 const fetchData = async()=>{

         const response = await fetch('http://quotable.io/random')

         const data = await response.json()

             h1.innerText = data.content

             h3.innerText = data.author

            tag.innerText = data.tags

     }

     button.addEventListener('click', fetchData);