var callAPI = new callApi();
function getEle(id) {
    return document.getElementById(id);
}

function getListProduct() {
    callAPI
        .layDanhSachSP()
        .then(function (result) {
            renderEm(result.data)
        })
        .catch(function (error) {
            console.error(error);
        });
}
getListProduct();

getEle("btnThemSP").addEventListener("click", function () {
    var footerEle = document.querySelector(".modal-footer");
    footerEle.innerHTML = `
        <button onclick="handleAdd()" class="btn btn-success">Add Product</button>
    `;
});
function handleAdd() {
    var name = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var screen = getEle("ManHinhSP").value;
    var backCamera = getEle("BackCamera").value;
    var frontCamera = getEle("FrontCamera").value;
    var img = getEle("Image").value;
    var desc = getEle("MoTa").value;
    var type = getEle("Type").value;

    var product = new product(name, price, screen, backCamera, frontCamera, img, desc, type);
    callAPI
        .themSP(product)
        .then(function (result) {
            getListProduct();
            document.querySelector("#myModal .close").click();
        })
        .catch(function (error) {
            console.error(error);
        });
}

function handleDelete(id) {
    callAPI
        .xoaSP(id)
        .then(function (result) {
            getListProduct();
        })
        .catch(function (error) {
            console.error(error);
        });
}
function handleEdit(id) {
    callAPI
        .layThongTinSP(id)
        .then(function (result) {
            $('#myModal').modal('show');
            var pd = result.data;
            getEle("TenSP").value = result.data.name;
            getEle("GiaSP").value = result.data.price;
            getEle("ManHinhSP").value = result.data.screen;
            getEle("BackCamera").value = result.data.backCamera;
            getEle("FrontCamera").value = result.data.frontCamera;
            getEle("Image").value = result.data.img;
            getEle("MoTa").value = result.data.desc;
            getEle("Type").value = result.data.type;
            var footerEle = document.querySelector(".modal-footer");
            footerEle.innerHTML = `
            <button onclick="handleUpdate('${result.data.id}')" class="btn btn-success">Update Product</button>
        `;
        })
        .catch(function (error) {
            console.error(error);
        });
}
function handleUpdate(id) {
    var name = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var screen = getEle("ManHinhSP").value;
    var backCamera = getEle("BackCamera").value;
    var frontCamera = getEle("FrontCamera").value;
    var img = getEle("Image").value;
    var desc = getEle("MoTa").value;
    var type = getEle("Type").value;

    var pd = new product(name, price, screen, backCamera, frontCamera, img, desc, type);
    callAPI
        .suaSP(id, pd)
        .then(function (result) {
            getListProduct();
            document.querySelector("#myModal .close").click();
        })
        .catch(function (error) {
            console.error(error);
        });
}
function renderEm(data) {
    console.log(data);
    var content = "";
    data.forEach(function (product) {
        content += `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.screen}</td>
            <td>${product.backCamera}</td>
            <td>${product.frontCamera}</td>
            <td>${product.img}</td>
            <td>${product.desc}</td>
            <td>${product.type}</td>
            <td>
          <button class="btn btn-success" onclick="handleEdit('${product.id}')">Sửa</button>
          <button class="btn btn-danger" onclick="handleDelete('${product.id}')">Xóa</button>
        </td>
      </tr>`;
    });
    getEle("tblDanhSachSP").innerHTML = content;
}
