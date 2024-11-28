import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import ItemsList from "./components/ItemsList";
import {items} from "./data"
import { useState } from "react";

function App() {
  const [itemsData, setItemsData] = useState(items)

  const allCategory = ['الكل',...new Set(items.map((i)=> i.category))]

  // filter by category
  const filterByCategory =(cat) => {
    if(cat === 'الكل') {
      setItemsData(items)
    } else {
      const newArr = items.filter((item)=> item.category === cat)
      setItemsData(newArr)
    }
  }

  // filter by search form
  const filterBySearch =(word) => {
    if(word === '') {
      filterByCategory();
    } else{
      const newArr = items.filter((item)=> item.title === word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="menu color-body font">
      <NavBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCategory={allCategory} />
        <ItemsList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
