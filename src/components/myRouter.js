import { Route, Routes } from 'react-router-dom';
import DonationForm from './donationForm';
import ItemList from './itemList';
import Login from './login';

function MyRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/itemList" element={<ItemList />} />
                <Route path="/donationForm" element={<DonationForm />} />
            </Routes>
        </div>
    )
}
export default MyRouter;