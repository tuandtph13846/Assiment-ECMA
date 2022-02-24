import { getAllSP } from "../api/product";

const ProductList = {
    async render() {
        const response = await getAllSP();
        return /* html */ `
                ${response.data.map((pro) => /* html */`
                <div class="">
                    <div class="col_1_of_5 span_1_of_5 m-14 pl-8">
                        
                        <div class="border p-3">
                            <a href="/product/${pro.id}" >
                                <img class="grid-img" src="${pro.img}" alt="" />
                            </a>
                            <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${pro.title}</a></h3>
                            <button class="left">${pro.price} VNĐ</button> <br>
                            <p>${pro.desc}</p>
                            <div class="btn right"><a href="#">Chi tiết</a></div>
                        </div>
                    </div>
                </div>              
               `).join("")} 
            `;
    },
};
export default ProductList;