import SidePanel from './components/UI/sidePanel/SidePanel';
import UserList from './components/UserList';
import './styles/app.css';

function App() {
    return (
        <div className='rex'>
            <SidePanel/>
        <UserList/>
        </div>
        
    )
}

export default App;
