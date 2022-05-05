import './App.css';
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import Favourite from "./components/Favourite";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  const [favNum, setFavNum] = useState(0);
  const [favBooks, setFavBooks]=useState([]);
  const [books,setBooks]=useState([
    {
        id:1,
        title:"Rat i mir",
        author:"Lav Nikolajevič Tolstoj",
        year: "1867.",
        fav:0,
    },
    {
        id:2,
        title:"Tvrđava",
        author:"Meša Selimović",
        year: "1970.",
        fav:0,
    },
    {
        id:3,
        title:"Na Drini ćuprija",
        author:"Ivo Andrić",
        year: "1945.",
        fav:0,
    },
    {
        id:4,
        title:"Nečista krv",
        author:"Borisav Stanković",
        year: "1910.",
        fav:0,
    },
    {
        id:5,
        title:"Koreni",
        author:"Dobrica Ćosić",
        year: "1954.",
        fav:0,
    },
    {
        id:6,
        title:"Prokleta avlija",
        author:"Ivo Andrić",
        year: "1954.",
        fav:0,
    },
]);

function refreshFavourite(){
  let favourite=books.filter((book)=>book.fav==1);
  setFavBooks(favourite);
}

function addBookToFavourite(bookId){
  books.map((book)=>{
    if(book.id===bookId){
      if(book.fav==0){
        book.fav=1;
        setFavNum(favNum+1);
      }
    }
  });
  refreshFavourite();
}

function removeBookFromFavourite(bookId){
  books.map((book)=>{
    if(book.id===bookId){
      book.fav=0;
      setFavNum(favNum-1);
    }
  });
  refreshFavourite();
}

  return (
    <BrowserRouter className="App" >
      <NavBar favNum={favNum}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books books={books} addToFavourite={addBookToFavourite}/>}/>
        <Route path="/favourite" element={<Favourite books={favBooks} removeBookFromFavourite={removeBookFromFavourite}/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
