import axios from "axios";
import { addSP } from "../../../api/product";

import NavAdmin from "../../../components/NavAdmin";

const AddProduct = {
    async render() {
        return /* html */`
        
          <div class="min-h-full">
          ${NavAdmin.render()}
          <header class="bg-white shadow">
              <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <div class="lg:flex lg:items-center lg:justify-between">
                      <div class="flex-1 min-w-0">
                          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">News</h2>
                      </div>
                  </div>
      
              </div>
          </header>
          <main>
      
              <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                  <div class=" px-4 py-6 sm:px-0">
      
                      <form id="formAddPost">
                          <div>
                              <label for="about" class="block text-sm font-medium text-gray-700">
                                  Title
                              </label>
                              <div class="mt-1">
                                  <textarea id="about" name="about" rows="3"
                                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md px-3"
                                      placeholder="Mời nhập title" ></textarea>
                              </div>
                          </div>
      
      
      
                          <div>
                              <label class="block text-sm font-medium text-gray-700">
                                  IMG
                              </label>
      
                              <div
                                  class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                  <div class="space-y-1 text-center">
                                      <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none"
                                          viewBox="0 0 48 48" aria-hidden="true">
                                          <path
                                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      <div class="flex text-sm text-gray-600">
                                          <label for="file-upload"
                                              class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                              <span>Upload a file</span>
                                              <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                          </label>
                                          <p class="pl-1">or drag and drop</p>
                                      </div>
                                      <p class="text-xs text-gray-500">
                                          PNG, JPG, GIF up to 10MB
                                      </p>
                                  </div>
      
                              </div>
                          </div>
                          <div>
                              <label for="about" class="block text-sm font-medium text-gray-700">
                                  Giá
                              </label>
                              <div class="mt-1">
                                  <input id="price-post" type="number" name="" rows="3"
                                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md h-7 pl-3"
                                      placeholder="Mời nhập giá">
                              </div>
                          </div>
                          <div>
                              <label for="about" class="block text-sm font-medium text-gray-700">
                                  Mô tả
                              </label>
                              <div class="mt-1">
                                  <textarea id="desc-post" name="" rows="3"
                                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md pl-3"
                                      placeholder="Mời nhập mô tả"></textarea>
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
          </main>
      </div>
        `;
    },
    afterRender() {
        const formAddPost = document.querySelector("#formAddPost");
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";

        formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();

            const file = document.querySelector("#file-upload").files[0];

            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });

            addSP({
                price: document.querySelector("#price-post").value,
                title: document.querySelector("#about").value,
                img: data.url,
                desc: document.querySelector("#desc-post").value,
            });
        });
    },
};
export default AddProduct;