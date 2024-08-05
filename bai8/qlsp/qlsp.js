let arrProduct = ["SonyXperia", "Iphone", "Nokia", "Samsung", "Oppo"]

function displayAllProduct() {
    let data = ""
    data += "<table>"
    data += "<tr>"
    data += "<td colspan='2' id='title'>Product Name</td>"
    data += "<td id='total'>" + arrProduct.length + " products</td>"
    data += "</tr>"
    for (let i = 0; i < arrProduct.length; i++) {
        data += "<tr>"
        data += "<td>" + arrProduct[i] + "</td>"
        data += "<td><button>Edit</button></td>"
        data += "<td><button>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data
}

function createProduct() {
    let value = document.getElementById("add").value 
    arrProduct.push(value)
    document.getElementById("add").value = ""
    displayAllProduct()
}

displayAllProduct()