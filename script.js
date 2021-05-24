var answercounter = 0;

//Logic is after each doubleclick 1st function will check is the specific location was clicked and set that variable to true or false
//The second function running after 100ms will take that true/false value and run another function checking the counter or click(1st answer...)

//Below is the second function which will run everytime there is a doubleclick on map, it will run with delay of 100ms

document.getElementById("map").addEventListener("dblclick", function() {
  setTimeout(function() {
    counter();
  }, 100);
});
//Based on counter value this will invoke another function which will change color
function counter() {
  if (answercounter == 4) {
    //Will check if the 5th click is oak hall
    if (oak_hallclicked == true) {
      $("#answerarea5").text("Your answer is correct");
      //Update counter to catch next click
      answercounter++;
      //Will execute function which will highlight the location in green
      oakcorrectanswer();
    } else {
      $("#answerarea5").text("Sorry wrong location");
      //Will execute function which will highlight the location in red
      oakwronganswer();
      answercounter++;
    }
  }
  if (answercounter == 3) {
    //Will check if the 4th click is sequoia hall
    if (sequoia_hallclicked == true) {
      $("#answerarea4").text("Your answer is correct");
      answercounter++;
      //Will execute function which will highlight the location in green
      sequoiacorrectanswer();
    } else {
      $("#answerarea4").text("Sorry wrong location");
      //Will execute function which will highlight the location in red
      sequoiawronganswer();
      answercounter++;
    }
  }

  if (answercounter == 2) {
    //Will check if the 3rd click is eucalyptus hall
    if (eucalyptus_hallclicked == true) {
      $("#answerarea3").text("Your answer is correct");
      answercounter++;
      //Will execute function which will highlight the location in green
      eucalyptuscorrectanswer();
    } else {
      $("#answerarea3").text("Sorry wrong location");
      //Will execute function which will highlight the location in red
      eucalyptuswronganswer();
      answercounter++;
    }
  }

  if (answercounter == 1) {
    //Will check if the 2nd click is sierra hall
    if (sierra_hallclicked == true) {
      $("#answerarea2").text("Your answer is correct");
      //Will execute function which will highlight the location in green
      sierracorrectanswer();
      answercounter++;
    } else {
      $("#answerarea2").text("Sorry wrong location");
      //Will execute function which will highlight the location in red
      sierrawronganswer();
      answercounter++;
    }
  }
  if (answercounter == 0) {
    //Will check if the 1st click is SRC
    if (srcclicked == true) {
      $("#answerarea1").text("Your answer is correct");
      //Will execute function which will highlight the location in green
      srccorrectanswer();
      answercounter++;
    } else {
      $("#answerarea1").text("Sorry wrong location");
      //Will execute function which will highlight the location in red
      srcwronganswer();
      answercounter++;
    }
  }
}
//These two variables will hold the count for right and wrong answers
var correct = 0;
var incorrect = 0;
//Have created 10 functions , 2 for each location, each of which will change the location to red or green

//Changes location to green and highlights on map
function srccorrectanswer() {
  //console.log("src correct green");
  SRC1.setOptions({
    strokeColor: "green",
    strokeOpacity: 0.8,
    fillColor: "green"
  });
  //Will display the next question
  $("#questionarea2").text("Where is the Sierra Hall ?");
  correct++;
  //This function will play animation for right answer
  right();
}
//Changes location to red and highlights on map
function srcwronganswer() {
  //console.log("src wrong red");
  SRC1.setOptions({ strokeColor: "red", strokeOpacity: 0.8, fillColor: "red" });
  //Will display the next question
  $("#questionarea2").text("Where is the Sierra Hall ?");
  incorrect++;
  //This function will play animation for wrong answer
  wrong();
}
//Changes location to green and highlights on map
function sierracorrectanswer() {
  //console.log("sierra correct green");
  sierra_hall1.setOptions({
    strokeColor: "green",
    strokeOpacity: 0.8,
    fillColor: "green"
  });
  $("#questionarea3").text("Where is the Eucalyptus Hall ?");
  correct++;
  //This function will play animation for right answer
  right();
}
//Changes location to red and highlights on map
function sierrawronganswer() {
  //console.log("sierra wrong red");
  sierra_hall1.setOptions({
    strokeColor: "red",
    strokeOpacity: 0.8,
    fillColor: "red"
  });
  $("#questionarea3").text("Where is the Eucalyptus Hall ?");
  incorrect++;
  //This function will play animation for wrong answer
  wrong();
}
//Changes location to green and highlights on map
function eucalyptuscorrectanswer() {
  //console.log("eucalyptus correct green");
  eucalyptus_hall1.setOptions({
    strokeColor: "green",
    strokeOpacity: 0.8,
    fillColor: "green"
  });
  $("#questionarea4").text("Where is the Sequoia Hall?");
  correct++;
  //This function will play animation for right answer
  right();
}
//Changes location to red and highlights on map
function eucalyptuswronganswer() {
  //console.log("eucalyptus wrong red");
  eucalyptus_hall1.setOptions({
    strokeColor: "red",
    strokeOpacity: 0.8,
    fillColor: "red"
  });
  $("#questionarea4").text("Where is the Sequoia Hall?");
  incorrect++;
  //This function will play animation for wrong answer
  wrong();
}
//Changes location to green and highlights on map
function sequoiacorrectanswer() {
  console.log("sequoia correct green");
  sequoia_hall1.setOptions({
    strokeColor: "green",
    strokeOpacity: 0.8,
    fillColor: "green"
  });
  $("#questionarea5").text("Where is the Oak Hall?");
  correct++;
  //This function will play animation for right answer
  right();
}
//Changes location to red and highlights on map
function sequoiawronganswer() {
  //console.log("sequoia wrong red");
  sequoia_hall1.setOptions({
    strokeColor: "red",
    strokeOpacity: 0.8,
    fillColor: "red"
  });
  $("#questionarea5").text("Where is the Oak Hall?");
  incorrect++;
  //This function will play animation for wrong answer
  wrong();
}
//Changes location to green and highlights on map
function oakcorrectanswer() {
  //console.log("oak correct green");
  oak_hall1.setOptions({
    strokeColor: "green",
    strokeOpacity: 0.8,
    fillColor: "green"
  });
  correct++;
  $("#resultarea").append(
    "You have " + correct + " correct and " + incorrect + " incorrect"
  );
  refresh();
  //Will stop the timer
  clearInterval(runfunction);
  //This function will play animation for right answer
  right();
}
//Changes location to red and highlights on map
function oakwronganswer() {
  //console.log("oak wrong red");
  oak_hall1.setOptions({
    strokeColor: "red",
    strokeOpacity: 0.8,
    fillColor: "red"
  });
  incorrect++;
  $("#resultarea").append(
    "You have " + correct + " correct and " + incorrect + " incorrect."
  );
  refresh();
  //Will stop the timer
  clearInterval(runfunction);
  //This function will play animation for wrong answer
  wrong();
}
//Set all initially to false, and switch to true if clicked
var srcclicked = false;
var sierra_hallclicked = false;
var eucalyptus_hallclicked = false;
var sequoia_hallclicked = false;
var oak_hallclicked = false;

//Each of these functions will check if the exact location on map is clicked,
//They will be invoked only if the specific location is clicked
function ifsrcclicked() {
  //Checks if counter is 0,i.e if SRC is 1st click, if it is then sets the variable to true
  if (answercounter == 0) {
    //console.log("srcclicked");
    srcclicked = true;
  }
}
//Checks if counter is 1,i.e if sierra is 2nd click, if it is then sets the variable to true
function ifsierra_hallclicked() {
  if (answercounter == 1) {
    //console.log("sierra_hallclicked");
    sierra_hallclicked = true;
  }
}
//Checks if counter is 2,i.e if eucalyptus is 3rd click
function ifeucalyptus_hallclicked() {
  if (answercounter == 2) {
    //console.log("eucalyptus_hallclicked");
    eucalyptus_hallclicked = true;
  }
}
//Checks if counter is 3,i.e if sequoia is 4th click
function ifsequoia_hallclicked() {
  if (answercounter == 3) {
    //console.log("sequoia_hallclicked");
    sequoia_hallclicked = true;
  }
}
//Checks if counter is 4,i.e if oak hall is 5th click
function ifoak_hallclicked() {
  if (answercounter == 4) {
    //console.log("oak_hallclicked");
    oak_hallclicked = true;
  }
}

var SRC1;
var sierra_hall1;
var eucalyptus_hall1;
var sequoia_hall1;
var oak_hall1;
var map;
//google map initialization function
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.23969, lng: -118.528202 },
    zoom: 17,
    disableDefaultUI: true,

    draggable: false, // will not move the map up down left right and will remain static
    scaleControl: false, // will allow zoom but you cannot zoom and move left and right
    scrollwheel: false, // disable zoom from mouse
    gestureHandling: "none", //disables zoom completly

    // draggable: false, mapTypeControl: false, don't know the use
    styles: [
      {
        elementType: "labels", //selecting labels
        stylers: [{ visibility: "off" }] // disable all labels and place markers
      }
    ]
  });
  var SRC = new google.maps.Rectangle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.0, //to hide at the start
    strokeWeight: 2,
    fillColor: "white", //to hide at the start
    fillOpacity: 0.35,
    clickable: true,
    cursor: "openhand",//to stop changing the cursor upon hovering over the location

    map: map,
    bounds: {
      north: 34.2406, //top horizontal line
      south: 34.2393, //bottom horizontal line
      east: -118.5247, //right horizontal line
      west: -118.5252 //left horizontal line
    }
  });
  //Assigning variable SRC to SRC1 which can be used outside the map function,
  //have done this to all locations to use them outside the funtion
  SRC1 = SRC;

  //Will execeute everytime you click on the SRC
  SRC.addListener("dblclick", function() {
    ifsrcclicked();
  });

  var sierra_hall = new google.maps.Rectangle({
    strokeColor: "blue",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: "white",
    fillOpacity: 0.35,
    clickable: true,
    cursor: "openhand",
    map: map,
    bounds: {
      north: 34.23845,
      south: 34.2381,
      east: -118.53,
      west: -118.5314
    }
  });

  sierra_hall1 = sierra_hall;
  //Will execeute everytime you click on the sierra
  sierra_hall.addListener("dblclick", function() {
    ifsierra_hallclicked();
  });

  var eucalyptus_hall = new google.maps.Rectangle({
    strokeColor: "black",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: "white",
    fillOpacity: 0.35,
    clickable: true,
    cursor: "openhand",
    map: map,
    bounds: {
      north: 34.2388,
      south: 34.23855,
      east: -118.5276,
      west: -118.5288
    }
  });

  eucalyptus_hall1 = eucalyptus_hall;
  //Will execeute everytime you click on the eucalyptus
  eucalyptus_hall.addListener("dblclick", function() {
    ifeucalyptus_hallclicked();
  });

  var sequoia_hall = new google.maps.Rectangle({
    strokeColor: "red",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: "white",
    fillOpacity: 0.35,
    clickable: true,
    cursor: "openhand",
    map: map,
    bounds: {
      north: 34.2408,
      south: 34.24015,
      east: -118.5276,
      west: -118.5284
    }
  });

  sequoia_hall1 = sequoia_hall;
  //Will execeute everytime you click on the sequoia
  sequoia_hall.addListener("dblclick", function() {
    ifsequoia_hallclicked();
  });

  var oak_hall = new google.maps.Rectangle({
    strokeColor: "green",
    strokeOpacity: 0.0,
    strokeWeight: 2,
    fillColor: "white",
    fillOpacity: 0.35,
    clickable: true,
    cursor: "openhand",
    map: map,
    bounds: {
      north: 34.2384,
      south: 34.23815,
      east: -118.5276,
      west: -118.5288
    }
  });

  oak_hall1 = oak_hall;
  //Will execeute everytime you click on the oak
  oak_hall.addListener("dblclick", function() {
    ifoak_hallclicked();
  });
  //Since map is initialized, I will start the timer now
  start();
}

var milliseconds = 0;
var seconds = 0;
var minutes = 0;
var finalmilliseconds;
var finalseconds;
var finalminutes;
var runfunction;
var timercounter = 0;

// Run a standard minute/second/hundredths timer:
function start() {
  //This counter is used to call the timer function only once , that is only on the first typed letter
  //If we do not do this, the timer will increment on every key press.
  timercounter++;
  if (timercounter == 1) {
    runfunction = setInterval(stopwatch, 10); // will run the function once every 10 miliseconds since 1000 milliseconds = 1 second
  }
}
// Start the timer:
function stopwatch() {
  milliseconds++;
  if (milliseconds == 100) {
    seconds++;
    milliseconds = 0;
  } else if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  // Add leading zero to numbers 9 or below (purely for aesthetics):

  if (milliseconds < 10) {
    finalmilliseconds = "0" + milliseconds;
  } else {
    finalmilliseconds = milliseconds;
  }

  if (finalseconds < 10) {
    finalseconds = "0" + seconds;
  } else {
    finalseconds = seconds;
  }

  if (minutes < 10) {
    finalminutes = "0" + minutes;
  } else {
    finalminutes = minutes;
  }

  document.querySelector(".timer").innerHTML =
    finalminutes + ":" + finalseconds + ":" + finalmilliseconds;
  console.log(minutes, seconds, milliseconds);
}

//This will execute the animation at the bottom if the answer is correct
function right() {
  $("#animationarea").fadeIn(2); //Text appearing
  var animationright = $("#animationarea");
  $("#animationarea").text("That's nice !! ");
  animationright.animate({ fontSize: "3em" }, "slow").fadeOut(100); //increase the font size of the animation
  $("#animationarea").removeAttr("style"); //Remove styling so that it zooms again on next condition
}
//This will execute the animation at the bottom if the answer is wrong
function wrong() {
  $("#animationarea").fadeIn(2); //Text appearing
  var animationwrong = $("#animationarea");
  $("#animationarea").text("You got it wrong buddy !! ");
  animationwrong.animate({ fontSize: "3em" }, "slow").fadeOut(500); //increase the font size of the animation
  $("#animationarea").removeAttr("style"); //Remove styling so that it zooms again on next condition
}

//Function refresh to dispaly Refresh message at the end of the quiz
function refresh() {
  var refreshtext = $("#refresharea");
  $("#refresharea").text("Refresh to play again");
}
