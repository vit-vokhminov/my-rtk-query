import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main1 from './pages/Main1';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main1 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
