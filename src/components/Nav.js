const Nav = {
    render() {
        return /* html */ `
            <nav>
                <ul class="menu">
                    <li class="menu-item"><a href="/" class="menu-item__link">Trang chủ</a></li>
                    <li class="menu-item"><a href="/about" class="menu-item__link">Giới thiệu</a></li>
                    <li class="menu-item"><a href="/news" class="menu-item__link">Tin tức</a></li>
                    <li class="menu-item"><a href="/product" class="menu-item__link">Sản phẩm</a></li>
                    <li class="menu-item"><a href="/contact" class="menu-item__link">Liên hệ</a></li>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a href="/signin" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      Sign in
                    </a>
                    <a href="/signup" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                      Sign up
                    </a>
                  </div>
                    </div>

                    
                </ul>
                
            </nav>
        `;
    },
};
export default Nav;