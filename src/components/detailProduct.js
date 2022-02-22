import { getAllSP } from "../api/product";
import product from "../pages/admin/products";
import Footer from "./footer";
import Header from "./header";

const DetailProduct = {
    async render() {
        const found = product.find((element) => element.id === "1");
        const response = await getAllSP();
        return /* html */ `
                ${Header.render()}
                <div class="section group">
                    <div class="grid grid-cols-3 gap-8 ">
                        ${response.data.map((pro) => /* html */`
                        <div class="border p-3">
                            <a href="" >
                                <img class="grid-img" src="${pro.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${pro.title}</a></h3>
                            <button class="left">${pro.price} VNĐ</button> <br>
                            <p>${pro.desc}</p>
                        </div>
                        `).join("")}
                    </div>
                </div>              
                ${Footer.render}
            `;
    },
};
export default DetailProduct;