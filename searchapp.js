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
     .then(data => displaySearchResult(data.data))
    //  .then(data => displaySearchResult(data))
    }
 }
const displaySearchResult = data =>{
    console.log(data);
    
    const searchResult = document.getElementById('search-result');
    // Searaching Result clear
    searchResult.textContent = '';
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="" class="card" style="width: 15rem; margin: 20px auto;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Phone Title</h5>
                    <p class="card-text">Write Something</p>
                    <a href="#" class="btn btn-primary">Click to Details</a>
                </div>
        </div>
        `
        searchResult.appendChild(div);
        
    });
}

