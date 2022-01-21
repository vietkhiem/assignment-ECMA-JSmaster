import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NewsList from "../components/newsLish";

const HomePage = {
    render() {
        return /* html */`
        <div class="max-w-5xl mx-auto border">
        ${Header.render()}
        ${Nav.render()}
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${NewsList.render()}
                </div>
                <div class="Footer">
                    ${Footer.render()}
                </div>
            </main>
            
        `;
    },
};
export default HomePage;