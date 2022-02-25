import axios from "axios";
import { getAll } from "../../../api/posts";
import NavAdmin from "../../../components/NavAdmin";

const News = {
    async render() {
        const response = await getAll();
        return /* html */`
            <div class="min-h-full">
                ${NavAdmin.render()}
                    <header class="bg-white shadow">
                        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            <div class="lg:flex lg:items-center lg:justify-between">
                                <div class="flex-1 min-w-0">
                                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">News</h2>
                                        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                                        </div>
                                        </div>
                                    <div class="mt-5 flex lg:mt-0 lg:ml-4">
                                    <a href="/admin/news/add" class="sm:ml-3">
                                        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        
                                        Thêm mới
                                        </button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </header>

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
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IMG</th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        
                                      </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">

                                            ${response.data.map((post, index) => /* html */`
                                                    <tr>
                                                    <td class="pl-8">${index + 1}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="flex items-center">
                                                            <div class="flex-shrink-0 h-10 w-10">
                                                            <img class="h-10 w-10 rounded-full" src="${post.img}" alt="">
                                                            </div>
                                                            
                                                        </div>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap">
                                                        <div class="text-sm text-gray-900">${post.title}</div>
                                                        
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium" >
                                                            <a href="/admin/news/${post.id}/edit"> <button class="btn-e bg-blue-500 text-white inline-block py-3 px-5 rounded w-20">Edit</button></a>
                                                        </td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                            <button data-id="${post.id}" class="btn bg-red-500 text-white inline-block py-3 px-5 rounded">Delete</button>
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
            </div>
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (confirm) {
                    axios.delete(`http://localhost:3001/posts/${id}`);
                }
            });
        });
    },
};
export default News;