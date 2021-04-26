window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // Recipe:
  let temp=json
  // Loop through the ride data

   for(let i = 0; i < temp.length; i++) {

    // Create a variable for the HTML element we're going to add to
    
    let levelofservice= ''
    if (temp[i].purpleRequested==true) {
      levelofservice='Noober Purple'
    } else if (temp[i].numberOfPassengers>3 ) {
      levelofservice='Noober XL'
    
    } else {
      levelofservice='Noober X'
    }
    let list = document.querySelector(`.rides`)
    // Insert HTML into the products element, using the data from each ride
    list.insertAdjacentHTML(`beforeend`, 
    `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelofservice}</span>
  </h1> <div class="border-4 border-gray-900 p-4 my-4 text-left">

    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${temp[i].passengerDetails.first} ${temp[i].passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${temp[i].passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${temp[i].numberOfPassengers}
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${temp[i].pickupLocation.address}</p>
        <p>${temp[i].pickupLocation.city}, ${temp[i].pickupLocation.state} ${temp[i].pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${temp[i].dropoffLocation.address}</p>
        <p>${temp[i].dropoffLocation.city}, ${temp[i].dropoffLocation.state} ${temp[i].dropoffLocation.zip}</p>
      </div>
    </div>
  </div>`)
  }
  

})