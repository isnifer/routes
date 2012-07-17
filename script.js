/*

NAME: Routes Sorter
VERSION: 0.1
AUTHOR: Anton Kuznetsov
LANG: JavaScript

Type of transport for this moment:

Самолет - Plane;
Поезд - Train;
Автобус - Bus;
Пароход - Steamship;

Number of types of transport is unlimited. It all depends on your imagination.
But! All types of transport need contains four necessary fields: TrType, WhencePlace, WherePlace, Name.

TrType - Transport type. This field is primary for output information of route.
WhencePlace - Place whence you start your current route.
WherePlace - Place where you end your current route.
Name - literal and/or numeric value of Transport.

Another fields are unique for every transport.


Plane contains next fields{
    TrType:
    WhencePlace:
    WherePlace:
    Name:
    Gate:
    SeatNum:
    BaggageTicket:
}

Train contains next fields{
    TrType:
    WhencePlace:
    WherePlace:
    Name:
    SeatNum:
}

Bus contains next fields{
    TrType:
    WhencePlace:
    WherePlace:
    Name:
    SeatNum:
}

Steamship contains next fields{
    TrType:
    WhencePlace:
    WherePlace:
    Name:
    SeatType:
}


/* Route from "Ivanovo" to "Florida City" */

var HappyRoute = [
    nightPlain = {
        TrType: "Plain",
        WhencePlace: "Moscow",
        WherePlace: "Miami",
        Name: "SK474",
        Gate: "D35",
        SeatNum: "F15",
        BaggageTicket: "434"
    },
    dayTrain = {
        TrType: "Train",
        WhencePlace: "Ivanovo",
        WherePlace: "Vladimir",
        Name: "Aeroexpress",
        SeatNum: "38D"
    },
    nightTrain = {
        TrType: "Train",
        WhencePlace: "Kineshma",
        WherePlace: "Ivanovo",
        Name: "Aeroexpress",
        SeatNum: "38D"
    },
    dayBus = {
        TrType: "Bus",
        WhencePlace: "Miami",
        WherePlace: "Florida City",
        Name: "SD456FD",
        SeatNum: "15"
    },
    daylyTrain = {
        TrType: "Train",
        WhencePlace: "Pokrov",
        WherePlace: "Moscow",
        Name: "Aeroexpress",
        SeatNum: "38D"
    },
    fourthTrain = {
        TrType: "Train",
        WhencePlace: "Vladimir",
        WherePlace: "Pokrov",
        Name: "Aeroexpress",
        SeatNum: "38D"
    }
];

var resultRoute = [];
var counter = 0;

 /*function TripSort(myArray){
    console.log(myArray[0].WhencePlace);
    do{
        var startFrom = myArray[i].WhencePlace;
        i++;
    } while (myArray[i] && counter <= myArray.length);
    if (myArray[i]) {
        resultRoute.push(myArray[i]);
        counter++;
        TripSort(myArray[i].WherePlace, myArray);
    }
    return counter;
};
*/

function TripSort(myArray){
    for (i=0; i<myArray.length; i++){
        var routeEnd = myArray[i].WherePlace;
        console.log(myArray[i].WherePlace);
        for (var j=0; j < myArray.length; j++){
            if (myArray[j].WhencePlace == routeEnd){
                resultRoute.push(myArray[j]);
                counter++;
            }
        }
    }
    return counter;
}




/*
function TripSort(myArray){
    OrigLen = myArray.length;
    startFrom = myArray[i].WhencePlace;
    for (var i=0; i<OrigLen; i++){


        counter++;
    }
    return counter;
};
*/

function reportRoute(){
    for (var k=0; k<resultRoute.length; k++){
        var Transport = resultRoute[k];
        if (Transport.TrType == "Train"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
        } else if (Transport.TrType == "Plain"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Gate", Transport.Gate, ". Seat", Transport.SeatNum, ". Baggage Ticket is", Transport.BaggageTicket, ".");
        } else if (Transport.TrType == "Stremship"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat Type is", Transport.SeatType, ".");
        } else if (Transport.TrType == "Bus"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
        } else {
            console.log("Sorry, your transport type is temporary undefined.");
        }
    }
}

TripSort(HappyRoute);
console.log(counter);
reportRoute();


