import { addCate } from "../../../api/categories";

import NavAdmin from "../../../components/NavAdmin";

const AddCate = {
    async render() {
        return /* html */`
        
          <div class="min-h-full">
            ${NavAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Categories</h2>
                                </div>
                    </div>

                </div>
            </header>
                <main>
                 
                  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class=" px-4 py-6 sm:px-0">

                    <form id="formAddCate">
                        <div>
                          <label for="about" class="block text-sm font-medium text-gray-700">
                            Danh mục
                          </label>
                          <div class="mt-1">
                            <input id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md h-10 pl-5" placeholder="Mời nhập danh mục">
                          </div>
                        </div>
                
                        <div class="p-5">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                              ADD
                            </button>
                        </div>
                           
                    <form>
                        
                      </div>        

                        </div>
                    </div>

                  </div>
              </main>
          </div>
        `;
    },
    afterRender() {
        const formAddCate = document.querySelector("#formAddCate");

        formAddCate.addEventListener("submit", async (e) => {
            e.preventDefault();

            addCate({
                name: document.querySelector("#about").value,

            });
        });
    },
};
export default AddCate;