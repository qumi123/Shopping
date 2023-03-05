function callApi() {
    this.layDanhSachSP = function () {
        return axios({
            url: "https://63f04134c59531ccf17d7954.mockapi.io/api/product",
            method: "GET",
        });
    };
    this.layThongTinSP = function (id) {
        return axios({
            url: `https://63f04134c59531ccf17d7954.mockapi.io/api/product/${id}`,
            method: "GET",
        });
    };

    this.themSP = function (product) {
        return axios({
            url: "https://63f04134c59531ccf17d7954.mockapi.io/api/product",
            method: "POST",
            data: product,
        });
    };
    this.xoaSP = function (id) {
        return axios({
            url: `https://63f04134c59531ccf17d7954.mockapi.io/api/product/${id}`,
            method: "DELETE",
        });
    };
    this.suaSP = function (id, product) {
        return axios({
            url: `https://63f04134c59531ccf17d7954.mockapi.io/api/product/${id}`,
            method: "PUT",
            data: product,
        });
    };
}
