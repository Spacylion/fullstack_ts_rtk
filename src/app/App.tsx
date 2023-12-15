import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Dashboard from "../entities/dashboard/Dashboard.tsx";
import Bookings from "../pages/bookings/Bookings.tsx";
import Cabins from "../pages/cabins/Cabins.tsx";
import Users from "../pages/users/Users.tsx";
import Settings from "../pages/settings/Settings.tsx";
import Account from "../pages/account/Account.tsx";
// import Login from "../pages/login/Login.tsx";
import PageNotFound from "../pages/page-not-found/PageNotFound.tsx";
import GlobalStyles from "../shared/styles/GlobalStyles.ts";
import AppLayout from "./AppLayout.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import Login from "../pages/login/Login.tsx";
import UIToaster from "../features/toaster/Toaster.tsx";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
})

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace to='dashboard'/>}/>
                        <Route path='dashboard' element={<Dashboard/>}/>
                        <Route path='bookings' element={<Bookings/>}/>
                        <Route path='cabins' element={<Cabins/>}/>
                        <Route path='users' element={<Users/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='account' element={<Account/>}/>
                    </Route>
                    <Route path='login' element={<Login/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
            <UIToaster/>
        </QueryClientProvider>
    );
}

export default App;