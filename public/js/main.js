
const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const getInfo = async(event) => {
    event.preventDefault();
    //  alert('Hello Buddy');
let cityval = cityName.Value;


   if(cityval === ""){
       city_name.innerText = `Please write the name before search.`;

   } else{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=Bijnor&units=metric&appid=2b29931eb3e722a8c2dcac378030b24f`;
    const response = await fetch(url);
   }


}

submitBtn.addEventListener('click', getInfo);