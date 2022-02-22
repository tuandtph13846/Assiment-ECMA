import Footer from "../components/footer";
import Header from "../components/header";
import ProductList from "../components/productList";

const ProductPage = {
    async render() {
        return /* html */`
        ${Header.render()}


                <div class="content">
                    ${await ProductList.render()}
                </div>
        
        ${Footer.render()}
        `;
    },
};
export default ProductPage;