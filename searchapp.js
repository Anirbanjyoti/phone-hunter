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
             <h1 class="text-center text-success">Write Phone Name to find your Favourite Phone!</h1>
         `
         emptyResult.appendChild(div);
    }
    else{
 //    load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displaySearchResult(data.data))
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
        <div onclick="loadPhoneDetails(${data.slug})" class="card" style="width: 15rem; margin: 20px auto;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data.phone_name}</h5>
                    <p class="card-text">${data.brand}</p>
                    <button class="btn btn-primary">Click to Details</button>
                </div>
        </div>
        `
        searchResult.appendChild(div);
        
    });
}

// to get indivitual information of mail
const loadPhoneDetails = phoneId => {
    // load meal data
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json() )
        // .then(data => console.log(data.data[0]))
        .then(data => DisplayPhoneDetail(data.data[0]))
}

const DisplayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${data.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body w-50 mx-auto">
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">${data.slug}</p>
        <p class="card-text">${data.slug}</p>
        </div>
    `
    phoneDetails.appendChild(div);
}