import './App.css';
import NavBar from "./components/NavBar";
import Books from "./components/Books";
import Footer from "./components/Footer";
import {useState} from "react";

function App() {
  //let favNum=0;
  const [favNum, setFavNum] = useState(0);
  const books=[
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
];
function addBookToFavourite(bookId){
  setFavNum(favNum+1);

}
  return (
    <div className="App" >
      <NavBar favNum={favNum}/>
      <Books books={books} addToFavourite={addBookToFavourite}/>
      <Footer/>
    </div>
  );
}

export default App;
