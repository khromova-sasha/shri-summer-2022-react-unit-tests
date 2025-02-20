import {ProductCard} from "./components/product-card/ProductCard";
import {getBouquetList} from "./__mocks__/bouquetList";

import styles from './App.module.css';

const bouquetList = getBouquetList();

export const App = () => <div className={styles.root}>
    <h1>Каталог</h1>
    <div className={styles.list}>
        {
            bouquetList.map(bouquet => <ProductCard key={bouquet.id} {...bouquet} availableCount={10} />)
        }
    </div>
</div>