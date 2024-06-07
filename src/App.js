import { Container } from "react-bootstrap";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MemberSave from "./pages/MemberSave";
import Login from "./pages/Login";
import MemberList from "./pages/MemberList";
import MemberDetail from "./pages/MemberDetail";
import BookSave from "./pages/BookSave";
import BookList from "./pages/BookList"
import BookDetail from "./pages/BookDetail";
function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/memberSave" exact={true} element={<MemberSave />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/memberList" exact={true} element={<MemberList />} />
          <Route path="/detail/:id" exact={true} element={<MemberDetail />} />
          <Route path="/bookSave" exact={true} element={<BookSave />} />
          <Route path="/bookList" exact={true} element={<BookList />} />
          <Route path="/book/detail/:id" exact={true} element={<BookDetail />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;