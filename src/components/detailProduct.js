import toastr from "toastr";
import { getSP } from "../api/product";
// import dataduct from "../pages/admin/dataducts";
import Footer from "./footer";
import Header from "./header";
import "toastr/build/toastr.min.css";
import { addToCart } from "../utils/cart";

const Detaildataduct = {
    // const found = dataduct.find((element) => element.id === "1");
    async render(id) {
        const { data } = await getSP(id);
        return /* html */ `
                ${Header.render()}
                
                <div class="section group">
                        <div class="cont span_2_of_3">
                            <div class="single">
                            <h2><a href="index.html">Home</a></h2>
                                <div class="grid-img1">
                                    <a href="images/pic4.jpg"><img src="${data.img}"></a> 
                                </div>
                                <div class="para">
                                    <h4>${data.title}</h4>
                                <div class="cart-b">
                                    <button class="left rs">${data.price} VNĐ</button>
                                    <input type="number" id="inputValue" class="border border-black"/>
                                    <div class="btn right" data-id="${data.id}" id="btnAddToCart">Add to Cart</div>
                                    <div class="clear"></div>
                                </div>
                                <h5>100 items in stock</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <div class="btn top"><a href="details.html">More details</a></div>
                                </div>
                            <div class="clear"></div>
                        </div>
                    
                    
                </div>              
                
                ${Footer.render}
                `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await getSP(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, () => {
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },
};
export default Detaildataduct;