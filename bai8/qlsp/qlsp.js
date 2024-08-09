let arrProduct = ["SonyXperia", "Iphone", "Nokia", "Samsung", "Oppo"]

function displayAllProduct() {
    let data = ""
    data += "<table>"
    data += "<tr>"
    data += "<td colspan='2' id='title'>Product Name</td>"
    data += "<td id='total'>" + arrProduct.length + " products</td>"
    data += "</tr>"
    // vị trí phần tử trong mảng: index ; 0 => length - 1
    for (let i = 0; i < arrProduct.length; i++) {
        data += "<tr>"
        data += "<td>" + arrProduct[i] + "</td>"
        data += "<td><button onclick='editProduct1(" + i + ")'>Edit</button></td>"
        data += "<td><button>Delete</button></td>"
        data += "</tr>"
    }
    data += "</table>"
    document.getElementById("display").innerHTML = data
    document.getElementById("create").style.display = 'none'
    document.getElementById("update").style.display = 'none'
}

function displayFromCreate() {
    document.getElementById("create").style.display = 'block'
}

function createProduct() {
    let value = document.getElementById("add").value 
    arrProduct.push(value)
    document.getElementById("add").value = ""
    displayAllProduct()
}

function editProduct(index) {
    // // test gọi hàm
    // alert("HelloWorld")
    // b1: lấy giá trị cần sửa
    // b2: tạo giá trị mới
    let newValue = prompt("Nhập tên mới: ", arrProduct[index])
    // b3: thay giá trị cần sửa = giá trị mới
    arrProduct[index] = newValue
    // b4: gọi lại hàm hiển thị để tạo lại giao diện mới
    displayAllProduct()
}

let flag

function editProduct1(index) {
    document.getElementById("update").style.display = 'block'
    flag = index
    document.getElementById("edit").value = arrProduct[index]
}

function saveNewValue() {
    let value =  document.getElementById("edit").value
    arrProduct[flag] = value
    displayAllProduct()
}


displayAllProduct()