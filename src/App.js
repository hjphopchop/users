import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import SidePanel from './components/UI/sidePanel/SidePanel';
import UserList from './components/UserList';
import Profile from './pages/Profile';
import Users from './pages/Users';
import './styles/app.css';


function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
       
        
    )
}

export default App;
