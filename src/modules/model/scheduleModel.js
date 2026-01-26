   
   
let _animalName = "";
let _ownerName = "";
let _service = "";
let _date = "";
let _time = "";
let _id = ""

export const schedule = function({
    animalName = "",
    ownerName = "",
    service = "",
    date = "",
    time = "",
    id = "",
} = {}){

    let _animalName = animalName;
    let _ownerName = ownerName;
    let _service = service;
    let _date = date;
    let _time = time;
    let _id = id

    return {
        getAnimalName() {
        return _animalName;
        },

        setAnimalName(value) {
        _animalName = value;
        },

        getOwnerName() {
        return _ownerName;
        },

        setOwnerName(value) {
        _ownerName = value;
        },

        getService() {
        return _service;
        },

        setService(value) {
        _service = value;
        },

        getDate() {
        return _date;
        },

        setDate(value) {
        _date = value;
        },

        getTime() {
        return _time;
        },

        setTime(value) {
        _time = value;
        },

        getId(){
            return _id
        },

        setId(value){
            _id = value;
        },

        returnSchedule() {
            return {
                animalName: _animalName,
                ownerName: _ownerName,
                service: _service,
                date: _date,
                time: _time,
                id : _id,
            };
        },
    };
};

