import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NewList from "../components/newList";

const HomePage = {
    async render() {
        return /* html */`
        ${Header.render()}
            <div id= "header">
                ${Banner.render()}
            </div>
                

                <div class="content">
                    ${await NewList.render()}
                </div>
        
        ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
        Banner.afterRender();
    },
};
export default HomePage;