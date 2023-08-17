import { Card } from 'primereact/card';
import '../css/item.css';
import { Button } from 'primereact/button'
import { useState } from 'react';
import { useSelector } from 'react-redux';


function Item({value,id, updateNumCards}) {
    const [numOfCards, setNumCards] = useState(0);
    let cards = useSelector(state => state.user.currentUser.Products)
   
    const header = (
        <img alt="Card" src={require(`../images${value.img}`)} />
    )
    return (
        <div id="item">
            <Card title={value.name} subTitle={value.subHeader} header={header} className="md:w-25rem">
                <h4>price: {value.price}</h4>
                <div>
                    <Button icon="pi pi-plus" text raised aria-label="Filter" onClick={() => { setNumCards(numOfCards + 1); updateNumCards(id, numOfCards + 1); }} />
                    <Button raised disabled={true}>{numOfCards}</Button>
                    <Button icon="pi pi-minus" text raised aria-label="Filter" onClick={() => { if (numOfCards === 0) return; setNumCards(numOfCards - 1); updateNumCards(id, numOfCards - 1); }} />
                </div>
            </Card>
        </div>
    )
}
export default Item