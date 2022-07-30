import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';
 
const PRODUCTS = [
    { category : 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    { category : 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    { category : 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    { category : 'Electronics', price: '$99.99', stocked: true, name: 'Ipad Touch'},
    { category : 'Electronics', price: '$349.99', stocked: false, name: 'Iphone 5'},
    { category : 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}

];

function App() {
  return (
    <FilterableProductTable products= {PRODUCTS} />
  );
}

export default App;
