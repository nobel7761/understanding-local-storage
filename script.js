let db;
let count = 1;

//initializing local storage with empty object if nothing found in the local storage or setting data of local storage in a variable!
if (!JSON.parse(localStorage.getItem("Movie-Count"))) {
    db = {};
}
else {
    db = JSON.parse(localStorage.getItem("Movie-Count"))
}

const addToDb = item => {

    //check item found in the db or not! if found following code snippets will execute
    if (db[item]) {
        db[item] = db[item] + 1;
    }
    //if not found item will be added to db with a value of count
    else {
        db[item] = count;
    }
    //item setting in the local storage if not found! increment the value if found!!!
    localStorage.setItem("Movie-Count", JSON.stringify(db));
}


const removeDb = item => {
    if (item in db) {
        console.log(item)
        delete db[item];
    }
    else {
        console.log("Item not found!!!")
    }
    localStorage.setItem("Movie-Count", JSON.stringify(db));
}


/* 1. check localStorage if anything exists or not
    if not found: set an empty object.
    if found: set the value in a variable.

2.  Now comes about changing/adding data that exists in localStorage or add new data that doesn't exist in localStorage
    if exists: change the value of that item. 
    if not exists: set the key with a value.

3.  Now comes about removing data from local storage
    if exists: delete the item from db object
    if not exists: display no data found!!! */