import { getSP } from "../api/product";
// import dataduct from "../pages/admin/dataducts";
import Footer from "./footer";
import Header from "./header";

const Detaildataduct = {
    async render(id) {
        // const found = dataduct.find((element) => element.id === "1");
        const { data } = await getSP(id);
        return /* html */ `
                ${Header.render()}
                
                <div class="section group">
                    <div class="grid grid-cols-3 gap-8 ">
                        <div class="border p-3">
                            <a href="" >
                                <img class="grid-img" src="${data.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${data.title}</a></h3>
                            <button class="left">${data.price} VNĐ</button> <br>
                            <p>${data.desc}</p>
                        </div>
                        </div>
                        </div>              
                        
                ${Footer.render}
            `;
    },
};
export default Detaildataduct;