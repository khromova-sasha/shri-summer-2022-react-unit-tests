import productCartStyles from "./ProductCard.module.css";
import {ProductInfo} from "../product-info/ProductInfo";
import {Button} from "../button/Button";
import classNames from "classnames";
import {useState} from "react";

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
                                title,
                                availableCount
                            }) => {

    const [imgExists, setImgExists] = useState(false);
    if (Boolean(imageUrl)) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = function () {
            setImgExists(true);
        };
        img.onerror = function () {
            setImgExists(false);
        };
    }
    return (
        <div data-testid="product-card" id={id} className={productCartStyles.container}>
            {imgExists
                ? <img className={productCartStyles.img} src={imageUrl}/>
                : <div className={classNames(productCartStyles.img, productCartStyles.noPhoto)}>Нет фото</div>}
            {isHit && <div data-testid="hit" className={classNames(productCartStyles.hit, productCartStyles.label)}>Хит</div>}
            {isSale && <div data-testid="sale" className={classNames(productCartStyles.sale, productCartStyles.label)}
                                                 style={{left: isHit ? "71px" : "32px"}}>Скидка</div>}
            {isFavorite
                ? <div data-testid="filled-heart" className={classNames(productCartStyles.heart, productCartStyles.filledHeart)}/>
                : <div data-testid="empty-heart" className={classNames(productCartStyles.heart, productCartStyles.emptyHeart)}/>
            }
            <ProductInfo bouquetHeight={bouquetHeight} bouquetWidth={bouquetWidth} currentPrice={currentPrice}
                         flowersCount={flowersCount} title={title} oldPrice={oldPrice}/>
            <div className={productCartStyles.buttonsContainer}>
                <Button variant={"green"} disabled={availableCount === 0} testId={"cart-button"}>В корзину</Button>
                <Button variant={"grey"} disabled={availableCount === 0} testId={"buy-button"}>Купить сразу</Button>
            </div>
        </div>
    );
}