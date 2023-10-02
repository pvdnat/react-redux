//Hotel/Resturant Activity

//Arit, David, Lemar

//Rest1 (resource blocking system)

//Arit - 5 mins (waiter) => Kitchen, Wait for the order to get prepared
//David - 10 mins (waiter) => Kitchen, Wait for the order to get prepared
//Lemar - 15 mins (waiter) => Kitchen, Wait for the order to get prepared

// Total Time ==> 5 + 10 + 15 => 30 minutes

//Rest2 (resource non-blocking system)

//Arit - 5 mins (waiter) => Kitchen, (get token - 1) +5
//David - 10 mins (waiter) => Kitchen, (get token - 2) +5
//Lemar - 15 mins (waiter) => Kitchen, (get token - 3)  +5 // the one which take maximum time

// Total Time ==> (5)  + (10) 5  + (15) 5 => 15 minutes