function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
	if (distanceInFeet > 2500) {
		Response = 'No can do.';
	}
	else if (distanceInFeet > 2000) {
		Response = 'I will gladly take your thirty bucks.';
	}
	else if (distanceInFeet <= 400) {
		Response = 'This one is on me!';
	}
	return Response;
}
function ternaryCheckCity(cityName){
  // Write your code here!
	cityName === 'NYC' ? Response = 'Ok, sounds good.' : Response = 'No go.';
	return Response;
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
	switch (tipAmount) {
		case 'generous' : Response = 'Thank you so much.'; 
    break;
		case 'not as generous': Response = 'Thank you.';
     break;
		default : Response = 'Bye.';
	}
	return Response;
}
let Response = "";
