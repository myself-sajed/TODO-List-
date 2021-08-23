// MISSION : TODO LIST

// Add Button to add TODO
let addButton = document.getElementById('add')

// Event Listener on add Button
addButton.addEventListener('click', addTODO)

// Function to add a TODO {Using these function after every reload}
populateToDo()
populateDoneItems()


// Function to add a TODO
function addTODO() {

    // Getting TODO Value 
    let desc = document.getElementById('Description').value
    data = {
        'desc': desc
    }

    //LocalStorage Management
    if (localStorage.getItem('data') == null) {
        var dataArray = []
    }
    else {
        dataArray = JSON.parse(localStorage.getItem('data'))
    }

    // Pushing data into array 
    dataArray.push(data)
    localStorage.setItem('data', JSON.stringify(dataArray))
    document.getElementById('todoList').innerHTML = ''

    // Function for populating the table of TODO
    populateToDo()


}

// Function for Populating the TODO List
function populateToDo() {

    // Getting all the data from LocalStorage
    array = JSON.parse(localStorage.getItem('data'))

    // Checking if array empty or not
    if (array.length > 0) {


        // Iterating through the array elements
        array.forEach(element => {

            document.getElementById('buttondlt').innerHTML = `<button type="button" class="btn btn-danger" onClick='deleteAll()'>Delete All</button>`
            dataToPrepend = `<div id="${element.desc}1">
            <li class="list-group-item d-flex justify-content-between align-items-center" >
            <b id="${element.desc}3" >${element.desc}</b>
            <span id="${element.desc}2"><button class="badge rounded-pill" id="${element.desc}" onClick='doneItem(this.id)'>Done</button></span>
          </li>
          </div>`
            $('#todoList').prepend('')
            $('#todoList').prepend(dataToPrepend)

            document.getElementById('Description').value = ''


        });

    }
    else if (array.length == 0) {
        let image = `<h3 class="text-center">Your todo list is Empty</h3>
                        <lable class="text-center">Go on and add something to it</lable>
                        <p class="aligncenter">
                        <img src="Media/empty-box.png" height="200" width="200" alt="centered image" />
                        </p>`
        $('#todoList').append(image)


    }
}

// Function for Populating done items 
function populateDoneItems() {
    myarray = JSON.parse(localStorage.getItem('cdata'))

    // Checking if array empty or not
    if (myarray.length > 0) {

        document.getElementById('ctodoList').innerHTML = ''
        // Iterating through the array elements
        myarray.forEach(element => {

            let str = `<div id="${element.desc}4">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                <b id="${element.desc}3"><img src="Media/check-all.svg" height="30" ,="" width="30" alt=""><b style="color:green;">${element.desc}</b></b>
                 <span id="${element.desc}2"><button class="badge rounded-pill" id="${element.desc}" onclick="deleteItem(this.id)">Delete</button></span>
                </li>
                 </div>`

            $('#ctodoList').prepend(str)
        });
    }
    else if (myarray.length == 0) {

        // Adding Image 
        let image = `<h3 class="text-center">No Task has been completed</h3>
                        <lable class="text-center">Go on and add something to it</lable>
        <p class="aligncenter">
        <img src="Media/empty-box.png" height="200" width="200" alt="centered image" />
    </p>`
        $('#ctodoList').append(image)
    }
}

// Function for deleting Done Item
function deleteItem(id) {
    let e = id + '4'
    document.getElementById(e).innerHTML = ''
    let karray = JSON.parse(localStorage.getItem('cdata'))
    karray.forEach(element => {
        if (element.desc == id) {
            let index = karray.indexOf(element)
            karray.splice(index, 1)
        }
    })
    if (karray.length == 0) {
        // Adding Image 

        let image = `<h3 class="text-center">Your todo list is Empty</h3>
                        <lable class="text-center">Go on and add something to it</lable>
                        <p class="aligncenter">
                        <img src="Media/empty-box.png" height="200" width="200" alt="centered image" />
                            </p>`
        $('#ctodoList').append(image)

    }
    localStorage.setItem('cdata', JSON.stringify(karray))



}

// Function for Doning Item
function doneItem(id) {

    // Local Storage Management
    if (localStorage.getItem('cdata') == null) {
        var cdataArray = []
    }
    else {
        cdataArray = JSON.parse(localStorage.getItem('cdata'))
    }

    let raw = { 'desc': id }
    cdataArray.push(raw)
    localStorage.setItem('cdata', JSON.stringify(cdataArray))
    $('#ctodoList').prepend('')


    myarray = JSON.parse(localStorage.getItem('cdata'))

    // Checking if array empty or not
    if (myarray.length > 0) {

        document.getElementById('ctodoList').innerHTML = ''
        // Iterating through the array elements
        myarray.forEach(element => {

            let str = `<div id="${element.desc}4">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                <b id="${element.desc}3"><img src="Media/check-all.svg" height="30" ,="" width="30" alt=""><b style="color:green;">${element.desc}</b></b>
                 <span id="${element.desc}2"><button class="badge rounded-pill" id="${element.desc}" onclick="deleteItem(this.id)">Delete</button></span>
                </li>
                 </div>`

            $('#ctodoList').prepend(str)

        });

    }
    else if (myarray.length == 0) {
        console.log('Nothing to done');
    }


    let e = id + '1'




    // delete item from local storage after getting done







    let tobeRemoved = id

    array = JSON.parse(localStorage.getItem('data'))
    array.forEach(element => {
        if (element.desc == tobeRemoved) {
            let index = array.indexOf(element)
            array.splice(index, 1)
        }
    })
    if (array.length == 0) {
        document.getElementById('buttondlt').innerHTML = ''
        let image = `<h3 class="text-center">Your todo list is Empty</h3>
                        <lable class="text-center">Go on and add something to it</lable>
        <p class="aligncenter">
        <img src="Media/empty-box.png" height="200" width="200" alt="centered image" />
    </p>`
        $('#todoList').append(image)

    }
    localStorage.setItem('data', JSON.stringify(array))

    document.getElementById(e).innerHTML = ''


}

// Deleting all items from LocalStorage
function deleteAll() {
    let array = JSON.parse(localStorage.getItem('data'))
    array = []
    localStorage.setItem('data', JSON.stringify(array))
    let image = `<h3 class="text-center">Your todo list is Empty</h3>
                        <lable class="text-center">Go on and add something to it</lable>
        <p class="aligncenter">
        <img src="Media/empty-box.png" height="200" width="200" alt="centered image" />
    </p>`
    document.getElementById('todoList').innerHTML = ''
    $('#todoList').append(image)
    document.getElementById('buttondlt').innerHTML = ''
}   