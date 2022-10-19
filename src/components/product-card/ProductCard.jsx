import productCartStyles from "./ProductCard.module.css";
import {ProductInfo} from "../product-info/ProductInfo";
import {Button} from "../button/Button";
import classNames from "classnames";

export const ProductCard = ({
                                bouquetHeight,
                                bouquetWidth,
                                currentPrice,
                                flowersCount,
                                id,
                                imageUrl,
                                isFavorite,
                                isHit,
                                isSale,
                                oldPrice,
                                title
                            }) => {
    return (
        <div data-testid={`product-card-${id}`} className={productCartStyles.container}>
            <img className={productCartStyles.img} src={imageUrl}/>
            {isHit && <div className={classNames(productCartStyles.hit, productCartStyles.label)}>Хит</div>}
            {isSale && <div className={classNames(productCartStyles.sale, productCartStyles.label)}
                            style={{left: isHit ? "71px" : "32px"}}>Скидка</div>}
            <div className={classNames(productCartStyles.heart, {
                [productCartStyles.filledHeart]: isFavorite,
                [productCartStyles.emptyHeart]: !isFavorite
            })}/>
            <ProductInfo bouquetHeight={bouquetHeight} bouquetWidth={bouquetWidth} currentPrice={currentPrice}
                         flowersCount={flowersCount} title={title} oldPrice={oldPrice}/>
            <div className={productCartStyles.buttonsContainer}>
                <Button variant={"green"}>В корзину</Button>
                <Button variant={"grey"}>Купить сразу</Button>
            </div>
        </div>
    );
}