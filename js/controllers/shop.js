var callAPI = new callApi();
function getEle(id) {
    return document.getElementById(id);
}

function getListShop() {
    callAPI
        .layDanhSachSP()
        .then(function (result) {
            renderListProduct(result.data)
        })
        .catch(function (error) {
            console.error(error);
        });
}
getListShop();

function renderListProduct(data) {
    console.log(data);
    var content = "";
    // data.forEach(function (product) {
    //     content += 
    // });

    // getEle("mainCart").innerHTML = contentHTML;
};