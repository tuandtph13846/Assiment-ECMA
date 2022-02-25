import { getSP } from "../api/product";
// import dataduct from "../pages/admin/dataducts";
import Footer from "./footer";
import Header from "./header";

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
                                    <div class="btn right"><a href="details.html">Add to Cart</a></div>
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
};
export default Detaildataduct;