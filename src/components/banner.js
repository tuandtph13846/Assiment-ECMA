const Banner = {
    render() {
        return /* html */ `
        <div class="flexslider">
            <div class="flex-viewport" style="overflow: hidden; position: relative;">
                <ul class="slides" style="width: 100%; -webkit-transition: 0.6s; transition: 0.6s; -webkit-transform: translate3d(-5032px, 0, 0);">
                    <li class="clone" style="width: 100%; float: left; display: block;">
                    <img src="images/slider1.jpg" alt=""/>
                </li>
                    <li style="width: 100%; float: left; display: block;" class="">
                    <img src="images/slider2.jpg" alt=""/>
                </li>
                <li class="" style="width:100%; float: left; display: block;">
                    <img src="images/slider3.jpg" alt=""/>
                </li>
            </ul>
            </div>
        </div>
        `;
    },
};
export default Banner;