/*

Type of transport:

Самолет - Plane;
Поезд - Train;
Автомобиль - Car;
Пароход - Steamship;

Main fields for all types of transport (TrType) {
    TrType:
    WhencePlace:
    WherePlace:
}

Plane contains next fields{
    TrType:
    Name:
    Gate:
    Seat:
    BaggageTicket:
}

Train contains next fields{
    TrType:
    Name:
    Seat:
    SeatType:
}

Car contains next fields{
    TrType:
    Name:
    CostPerDay:
}

Steamship contains next fields{
    TrType:
    Name:
    PortName:
    SeatType:
}

Possible variant of output information:

console.log("Take ", TrType, " ", Name, " from ", WhencePlace, " to ", WherePlace, ". Seat ", Seat);

*/

/*var Route = {};

function Route(TrType, WhencePlace, WherePlace){
    this.TrType = TrType;
    this.WhencePlace = WhencePlace;
    this.WherePlace = WherePlace;
}

Plain.prototype = new Route();

function Plain(TrType){
    this.TrType = "Plain";
    this.WhencePlace = "Майами";
    this.WherePlace = "Москва";
    this.Name = "Аэроэкспресс";
    this.SeatOf = "38D";
    this.SeatType = "сидячее"
    console.log("Take ", TrType, " ", Name, " from ", WhencePlace, " to ", WherePlace, ". Seat ", SeatOf, ". SeatType is ", SeatType);
}*/

/* Route from "Ivanovo" to "Florida City" */

var HappyRoute = new Array();

HappyRoute = [
    nightPlain = {
        TrType: "Plain",
        WhencePlace: "Moscow",
        WherePlace: "Miami",
        Name: "SK474",
        Gate: "D35",
        SeatNum: "F15",
        BaggageTicket: "434"
    },
    dayBus = {
        TrType: "Bus",
        WhencePlace: "Miami",
        WherePlace: "Florida City",
        Name: "SD456FD",
        SeatNum: "15"
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
]

var resultRoute = new Array();
var gi = 0;

function middleRoute(startFrom, myArray){
    var i = -1;
    do{
        i++;
    } while (typeof(myArray[i]) != 'undefined' && myArray[i].WhencePlace != startFrom);
    if (typeof(myArray[i])!='undefined' ) {
        resultRoute.push(myArray[i]);
        middleRoute(myArray[i].WherePlace, myArray);
    }
};

function reportRoute(){
    for (var k=0; k<resultRoute.length; k++){
        var Transport = resultRoute[k];
        if (Transport.TrType == "Train"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
        } else if (Transport.TrType == "Plain"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Gate", Transport.Gate, ". Seat", Transport.SeatNum, ". Baggage Ticket is", Transport.BaggageTicket, ".");
        } else if (Transport.TrType == "Car"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Cost Per Day is", Transport.CostPerDay, ".");
        } else if (Transport.TrType == "Stremship"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat Type is", Transport.SeatType, ".");
        } else if (Transport.TrType == "Bus"){
            console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
        } else {
            console.log("Sorry, your transport type is undefined");
        }
    }
}

middleRoute("Kineshma", HappyRoute);
reportRoute();


/*
var Train = {
    TrType: "Train",
    WhencePlace: "Miami",
    WherePlace: "Moscow",
    Name: "Aeroexpress",
    SeatNum: "38D",
}


function printRoute(Transport){
    if (Transport.TrType === "Train"){
        console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
    } else if (Transport.TrType === "Plain"){
        console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Gate", Transport.Gate, ". Seat", Transport.SeatNum, ". Baggage Ticket is", Transport.BaggageTicket, ".");
    } else if (Transport.TrType === "Car"){
        console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Cost Per Day is", Transport.CostPerDay, ".");
    } else if (Transport.TrType === "Stremship"){
        console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat Type is", Transport.SeatType, ".");
    } else if (Transport.TrType === "Bus"){
        console.log("Take", Transport.TrType, Transport.Name, "from", Transport.WhencePlace, "to", Transport.WherePlace, ". Seat", Transport.SeatNum, ".");
    } else {
        console.log("Sorry, your transport type is undefined");
    }
};


printRoute(Train);

*/

/*
 Steamship contains next fields{
 TrType:
 Name:
 SeatType:
 }
*/

