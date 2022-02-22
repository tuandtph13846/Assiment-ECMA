import { getAll } from "../api/posts";

const NewList = {
    async render() {
        const response = await getAll();
        return /* html */ `
        ${response.data.map((post) => /* html */`
                <div class="content">
                        
                            <div class="col_1_of_5 span_1_of_5 h-96 w-80 m-4">
                                <div class="border p-3">
                                    <a href="" >
                                        <img class="grid-img h-56" src="${post.img}" alt="" />
                                    </a>
                                    <h3 class="my-3"><a href="" class="font-semibold text-lg text-orange-500 ">${post.title}</a></h3>
                                    <p>${post.desc}</p>
                                    
                                </div>
                            </div>  
                       
                        
                </div>
                        
                `).join("")}
                
                
            `;
    },
};
export default NewList;