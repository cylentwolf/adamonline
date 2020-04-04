var ore = 0;
var iron = 5;
var stationLevel = 1;
var veldspar = 0;
var veldsparEfficiency = 0.1;
var basicMine = 0;
var tritanium = 0;
var pyerite = 0;
var mexMine = 0;
var zydrine = 0;
var morphite = 0;
var food = 0;
var megacyte = 0;
var equipment = 0;
var isogen = 0;
var nocxium = 2;
var numDrones = 0;
var smelterStoneCost = 5;
var counter = 0;
var autoVeldspar = 0;


function oreClick(oreType, amt) {
    if (oreType == 'veldspar')
      veldspar = veldspar + amt;
    if (1000*stationLevel < veldspar) {
      veldspar = 1000*stationLevel;
    }
    document.getElementById("veldspar").innerHTML = veldspar;
};
function processClick(oreType) {
  
    if (oreType == 'veldspar')
    {
      var temp = veldspar;
      if (Math.floor(temp * veldsparEfficiency) >= 1) {
        tritanium += Math.floor(temp * veldsparEfficiency);
        veldspar -= temp;
      }

    }
    if (100*stationLevel < tritanium )
      tritanium = 100*stationLevel;
    document.getElementById("tritanium").innerHTML = tritanium;
};
function assignDrone(oreType, Location) {
    if (numDrones > 0)
      numDrones -= 1;
    if (Location == 'Alpha')
    {
      if (oreType == 'veldspar')
        autoVeldspar += 1;
    }
  
}
function makeMiningDrone(amt) {
    if (tritanium >= 5 * amt)
      tritanium -= 5*amt;
    if (numDrones < 5 && amt < 5)
      numDrones += amt;
    
    document.getElementById("tritanium").innerHTML = tritanium;
    document.getElementById("drones").innerHTML = numDrones;
};

function basicClick(amt) {
    if ((ore >= amt*10) && (food >= amt*10))
    {
        ore = ore - amt*10;
        food = food - amt*10;
        basicMine = basicMine + amt;
  ///      document.getElementById("ore").innerHTML = ore;
  //      document.getElementById("food").innerHTML = food;
  //      document.getElementById("basicMine").innerHTML = basicMine;
    }
};

function changePyeMineClick(amt){
    if (basicMine >= amt) {
        basicMine = basicMine + -amt;
        pyeMine = pyeMine + amt;
   //     document.getElementById("pyeMine").innerHTML = pyeMine;
    //    document.getElementById("basicMine").innerHTML = basicMine;
    }

};

function changeTriMineClick(amt){
    if (basicMine >= amt) {
        basicMine = basicMine + -amt;
        triMine = triMine + amt;
 //       document.getElementById("triMine").innerHTML = triMine;
  //      document.getElementById("basicMine").innerHTML = basicMine;
    }

};

function changeMexMineClick(amt){
    if (basicMine >= amt) {
        basicMine = basicMine + -amt;
        mexMine = mexMine + amt;
   //     document.getElementById("mexMine").innerHTML = mexMine;
   //     document.getElementById("basicMine").innerHTML = basicMine;
    }

};

function buildBasicScoutDrone(amt){
    if ((ore >= 100*amt) && (food >= 100*amt) && (equipment >= 100*amt)) {
        basicScoutDrone = basicScoutDrone + amt;
        ore = ore - 50*amt;
        food = food - 50*amt;
        equipment = equipment - 50*amt;
 //       document.getElementById('basicScoutDrone').innerHTML = basicScoutDrone;
 //       document.getElementById('ore').innerHTML = ore;
 //       document.getElementById('food').innerHTML = food;
 //       document.getElementById('equipment').innerHTML = equipment;
 //       document.getElementById('ScoutBasic').removeAttribute('class');
 //       document.getElementById('ScoutBasic').setAttribute('class','show');
    }
    
};

function exploreEmpireSectors(amt) {
  if (basicScoutDrone >= amt) {
      var i;
    for (i=0; i<amt;i++) {
        var roll = Math.floor(Math.random() * 100)+1;
        console.log(roll);
        if (roll <= empireSectorPercent)
            unownedEmpireSectors += 1;
            document.getElementById('unownedEmpireSectors').innerHTML = unownedEmpireSectors;
            
    }
    basicScoutDrone = basicScoutDrone - amt;
    document.getElementById('basicScoutDrone').innerHTML = basicScoutDrone;
    if (basicScoutDrone <= 0) {
        document.getElementById('ScoutBasic').removeAttribute('class');
        document.getElementById('ScoutBasic').setAttribute('class','hide');
    }
  }

};


document.addEventListener("DOMContentLoaded", function(event) {
   
       // document.getElementById("ore").innerHTML = ore;
       // document.getElementById("food").innerHTML = food;
  });


// google Tracking ID
// UA-128621560-1
var iceWidth = 0;
var elemTerran = document.getElementById("myBar");
var width = 0;
//var id = setInterval(frame, 10);
var elem = document.getElementById("iceBar");


window.setInterval(function(){
    counter = counter + 1;
    oreClick('veldspar',autoVeldspar);
   
    if (numDrones > 0) // check to ensure that there are unasssigned drones to be assigned.
      document.getElementById('assignDrone').style.display = "block"; 
    

    if (counter % 5 == 0)
    {
        //isogenClick(isoMine);
        //nocxiumClick(zydMine);
    }    
    if (counter % 15 == 0)
    {
     
        //zydrineClick(zydMine);
    }
    if (counter % 30 == 0)
    {     
        //megacyteClick(megaMine);
    }
    if (counter >= 60)
    {
        counter = 0;
        //morphiteClick(morMine);
    }
    i = 1;
  
    
      if (width >= 100) {
        //clearInterval(id);
        while (width >= 100) {
            width -= 100;
            ore += 1;
        }
        //document.getElementById('ore').innerHTML = ore;
        

       // elemTerran.style.width = width+ "%";
      } else {
        width+=10;
     //   elemTerran.style.width = width+ "%";
      }
    
  
    
    
      if (iceWidth >= 100) {
        //clearInterval(id);
        iceWidth = 0;
        //elem.style.width = iceWidth+ "%";
      } else {
        iceWidth+=10;
        //elem.style.width = iceWidth+ "%";
        //elem.innerHTML = iceWidth;
      }
    
   
}, 1000);

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}