const searchPhone = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
 //    Search field clear
    searchField.value = '';
    if(searchText == ''){
        const emptyResult = document.getElementById('phone-details'); 
        emptyResult.textContent = '';
        const div = document.createElement('div');
         div.innerHTML = `
             <h1 class="text-center">Write Something to find Phone!</h1>
         `
         emptyResult.appendChild(div);
    }
    else{
 //    load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => console.log(data))
    //  .then(data => displaySearchResult(data))
    }
 }

 ////////////////////////////////////

