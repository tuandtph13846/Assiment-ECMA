import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = {
    render() {
        return /* html */ `
        ${Header.render()}
        <div class="wrap"> 
    
    <div class="content">
        <div class="section group">
            <div class="cont span_2_of_3">
                <div class="single">
                    <h2>About Us</h2>
                    <h3>About Our&nbsp;<span><a href="">Lorem ipsum dolor sit amet</a></span></h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       <div class="btn top"><a href="details.html">Read</a></div>
                  </div>
           </div>

            <div class="clear"></div>
            <div class="sidebar">
                <h2>Categories</h2>
                <ul class="nav1">
                   <li><a href="">Lorem ipsum dolor sit amet,Lorem Ipsum is simply dummy</a></li>
                   <li><a href="">Aliquam tincidunt mauris eu risus,Lorem Ipsum is simply</a></li>
                   <li><a href="">Vestibulum auctor dapibus neque,Lorem Ipsum is simply</a></li>
                   <li><a href="">Lorem ipsum dolor sit amet,,Lorem Ipsum is simply dummy</a></li>
                   <li><a href="">Aliquam tincidunt mauris eu risus,Lorem Ipsum is simply</a></li>
                   <li><a href="">Vestibulum auctor dapibus neque,Lorem Ipsum is simply</a></li>
                </ul>
            </div>
        </div> 
    </div>
    </div>
    ${Footer.render()}
        `;
    },
};
export default AboutPage;