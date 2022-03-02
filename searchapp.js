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
    // console.log(data);
    const searchResult = document.getElementById('search-result');
    // Searaching Result clear
    searchResult.textContent = '';
    data.forEach(data => {
        // console.log(data);
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card" style="width: 15rem; margin: 20px auto;">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${data.phone_name}</h5>
                    <p class="card-text">Brand: ${data.brand}</p>
                    <button onclick="loadPhoneDetails('${data.slug}')" class="btn btn-primary">Click to See Details</button>
                </div>
        </div>
        `
        searchResult.appendChild(div);
    });
}
//////////////////////////////////
// to get indivitual information of Phone
const loadPhoneDetails = id => {
    // console.log(id);
    // load phone data
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    console.log(url);
    fetch(url)
        .then(res => res.json() )
        .then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
//     console.log(`I am Clicked`);
    
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="...">
        <div class="card-body w-50 mx-auto">
        <h5 class="card-title">Phone Name: ${phone.name}</h5>
        <p class="card-title">Release Date: ${phone.releaseDate}</p>
        <p class="card-title">Storage: ${phone.mainFeatures.storage}</p>
        <p class="card-title">Storage: ${phone.mainFeatures.memory}</p>
        </div>
    `
    phoneDetails.appendChild(div);
}