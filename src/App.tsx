import {BrowserRouter as Router, Routes, Route} from "react-router";
import {Routes as WebRoutes} from "./constants";
import {Home, Category, SingleItem, Basket} from "./pages";
import Header from "@/components/header/Header.tsx";
import Footer from "@/components/footer/Footer.tsx";
import {AppSidebar} from "@/components/sidebar/AppSidebar.tsx";

function App() {
    return (
        <Router>
            <div className={'min-h-screen w-auto flex flex-col'}>
                <Header/>
                <main className={'flex-1 pt-[50px] pb-[50px] md:pb-auto relative'}>
                    <AppSidebar/>
                    <Routes>
                        <Route path={WebRoutes.HOME} element={<Home/>}/>
                        <Route path={WebRoutes.CATEGORY} element={<Category/>}/>
                        <Route path={WebRoutes.SINGLE_ITEM + '/:id'} element={<SingleItem/>}/>
                        <Route path={WebRoutes.BASKET} element={<Basket/>}/>
                        <Route path={WebRoutes.NOT_FOUND} element={<h1>Not Found</h1>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
