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
             <h1 class="text-center text-success">Write your Favourite Phone Name!</h1>
         `
         emptyResult.appendChild(div);
    }
    else{
 //    load data 
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url);
    fetch(url)
     .then(res => res.json())
     .then(data => displaySearchResult(data.data))
    }
 }
const displaySearchResult = data =>{
        if(data.length == 0){
                // console.log(`There is no phone`);
                const noPhone = document.getElementById('phone-details');
                noPhone.textContent = '';
                const div = document.createElement('div');
                div.innerHTML = `
                    <h1 class="text-center text-success">There is no Phone Found You have Searched!</h1>
                `
                noPhone.appendChild(div);
            }
    // console.log(data.slice(1, 20));
 else{
    const noPhoneMessage = document.getElementById('phone-details');
    noPhoneMessage.textContent = '';
    const searchResult = document.getElementById('search-result');
    // Searaching Result clear
    searchResult.textContent = '';
    //  Show maximum 20 phones
    data.slice(0, 20).forEach(data => {
        // console.log(data);
        // data.slice(1, 20);
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
}
//===================================
// == to get indivitual information of Phone
const loadPhoneDetails = id => {
    // console.log(id);
    // load phone data
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json() )
        .then(data => displayPhoneDetail(data.data))
}
const displayPhoneDetail = phone => {
    // console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${phone.image}" class="card-img-top w-25 mx-auto mt-2" alt="...">
        <div class="card-body w-35 mx-auto border border-info rounded my-5">
            <h5 class="card-title">Phone Name: ${phone.name}</h5>
            <p id="releaseDate" class="card-title">Release Date: ${phone.releaseDate}</p>
            <p class="card-title">Storage: ${phone.mainFeatures.storage}</p>
            <p class="card-title">Memory: ${phone.mainFeatures.memory}</p>
            <p class="card-title">Sensors: ${phone.mainFeatures.sensors}</p>
            <p class="card-title">Others: ${phone.others}</p>
        </div>
    `
    phoneDetails.appendChild(div);    
    if(phone.releaseDate == ''){
        // console.log(`There is no Release Date`);
        const releaseDate =document.getElementById('releaseDate');
        releaseDate.innerText = 'Release Date: There is no Release Date!';       
    }
}