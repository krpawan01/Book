import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './book/Book';
import BookDetails from './book/BookDetails';
import CostumBookContext from './context/bookContext';

function App() {
  return (
    <div className="App">
      <CostumBookContext>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Book />} />
            <Route path="/detail/:id" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </CostumBookContext>
    </div>
  );
}

export default App;
