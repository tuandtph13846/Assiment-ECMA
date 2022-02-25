import Footer from "../components/footer";
import Header from "../components/header";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const Cart = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return/* html */ `
            ${Header.render()}
                        <main>

                            
                        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                            <div class="px-4 py-6 sm:px-0">
                            <div class=" rounded-lg h-96">


                            <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">

                                            ${cart.map((item) => /* html */`
                                                    <tr>
                                                        
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${item.title}</div>
                                                        
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${item.price}</div>
                                                        
                                                        </td>
                                                        <td>
                                                            <button data-id="${item.id}" class="btn btn-increase">+</button>
                                                            <button data-id="${item.id}" class="btn btn-decrease">-</button>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button data-id="${item.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
                                                        </td>
                                                    </tr>
                                            `).join("")}
                                        
                        
                                    
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            </div>
                        </div>
                            
                            
                            </div>
                            </div>

                        </div>
                    </main>
            ${Footer.render()}
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id);
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(Cart, "#app");
                    });
                }
            });
        });
    },
};
export default Cart;