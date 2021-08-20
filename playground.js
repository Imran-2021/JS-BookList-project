//dom selection
//event listener
//basic validition
//creating elements 
//append child

const title = document.querySelector("#title")
const author = document.querySelector("#author")
const year = document.querySelector("#year")
const submit = document.querySelector(".btn")
const bookList = document.querySelector("#book-list")
submit.addEventListener('click',function(e){
    e.preventDefault()
    if(title.value== ""){
         alert("enter each input field");
      
    }else if(author.value== ""){
        alert("enter each input field");
    }
    else if(year.value== ""){
        alert("enter each input field");
    }
    else{
        const newRow = document.createElement("tr")
        const newTitle = document.createElement("th")
        newTitle.innerHTML=`
        <th>${title.value}<th>
        `
        const newAuthor = document.createElement("th")
        newAuthor.innerHTML=`
        <th>${author.value}<th>
        `
        const newyear = document.createElement("th")
        newyear.innerHTML=`
        <th>${year.value}<th>
        `

        newRow.appendChild(newTitle)
        newRow.appendChild(newAuthor)
        newRow.appendChild(newyear)
        bookList.appendChild(newRow)
    }
})