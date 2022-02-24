import Navigo from "navigo";
import DetailProduct from "./components/detailProduct";
import AboutPage from "./pages/about";
import Auth from "./pages/admin/accout";

import Categories from "./pages/admin/accout/categories";
import AddCate from "./pages/admin/accout/categories/add";
import EditCate from "./pages/admin/accout/categories/edit";
import DastBoard from "./pages/admin/dashboard";
import News from "./pages/admin/news";
import AddNews from "./pages/admin/news/add";
import EditNew from "./pages/admin/news/edit";
import Product from "./pages/admin/products";
import AddProduct from "./pages/admin/products/add";
import EditProduct from "./pages/admin/products/edit";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import HomePage from "./pages/home";
import ProductPage from "./pages/products";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};
router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/product": () => {
        print(ProductPage);
    },
    "/admin/dashboard": () => {
        print(DastBoard);
    },
    "/admin/news": () => {
        print(News);
    },
    "/admin/news/add": () => {
        print(AddNews);
    },
    "/admin/news/:id/edit": ({ data }) => {
        print(EditNew, data.id);
    },
    "/auth/login": () => {
        print(Login);
    },
    "/auth/signup": () => {
        print(Signup);
    },
    "/admin/categories": () => {
        print(Categories);
    },
    "/admin/categories/add": () => {
        print(AddCate);
    },
    "/admin/categories/:id/edit": ({ data }) => {
        print(EditCate, data.id);
    },
    "/admin/accout": () => {
        print(Auth);
    },
    "/admin/product": () => {
        print(Product);
    },
    "/admin/product/add": () => {
        print(AddProduct);
    },
    "/admin/product/:id/edit": ({ data }) => {
        print(EditProduct, data.id);
    },
    "/product/:id": ({ data }) => {
        print(DetailProduct, data.id);
    },
});
router.resolve();

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(script);
        };
        script.onerror = () => {
            reject(new Error("Lỗi kết nối"));
        };
        document.head.append(script);
    });
}

async function asyncFunction() {
    try {
        const result = await loadScript("https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
asyncFunction();