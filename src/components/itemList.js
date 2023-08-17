import '../css/itemList.css';
import { useDispatch, useSelector } from 'react-redux';
import Item from './item';
import { useState } from "react"
import { setArr,setSum } from '../store/userSlice/userAction'


function ItemList() {
    const dispatch = useDispatch()
    let cards = useSelector(state => state.user.currentUser.Products)
    let sum = useSelector(state => state.user.currentUser.sum)
    const items=useSelector(state=>state.products.productsList);
    const [arr, setarr] = useState(cards)

    function updateNumCards(key) {

        let x = []
        arr.forEach(element => {
            x.push(element)
        });
        x[key]++;
        setarr(x);
        dispatch(setArr(x));

        let y = []
        console .log("items",items)
        items.forEach(element => {
           y.push(element)
        });
        let sumToPay=y[key].price;
        dispatch(setSum(sum+sumToPay));

        console.log("x",x)
    }

    const productsList = useSelector((state) => state.products.productsList);
    return (
        <>
            <div id="items">
                {productsList.map((v, i) => <Item key={i} value={v} numCard={arr[i]}  updateNumCards={()=>updateNumCards(i)} />)}
            </div>
        </>
    )
}
export default ItemList;

// 