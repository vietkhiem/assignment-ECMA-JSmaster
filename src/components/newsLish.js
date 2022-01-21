import data from "../data";

const NewsList = {
    render() {
        return /* html */`
            <h2 class="font-semibold text-2xl my-4 text-blue-900 uppercase">Tin tức học tập</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((post) => /* html */`
                        <div class="border p-4">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" />                    
                        </a>
                        <h3 class="my-3"><a  href="/news/${post.id}" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
                        <p class="text-sm text-gray-500">${post.desc} </p>
                    </div>
                `).join("")}
            </div>
        
        `;
    },
};
export default NewsList;