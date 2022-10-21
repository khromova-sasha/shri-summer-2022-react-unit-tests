import productInfoStyles from "./ProductInfo.module.css";
import classNames from "classnames";
import {LabelWithIcon} from "../label-with-icon/LabelWithIcon";

export const ProductInfo = ({
                                bouquetHeight,
                                bouquetWidth,
                                currentPrice,
                                flowersCount,
                                oldPrice,
                                title
                            }) => {
    return (
        <div className={productInfoStyles.container}>
            <div className={productInfoStyles.title}>{title}</div>
            <div className={productInfoStyles.priceContainer}>
                <span data-testid="product-info-current-price"
                      className={classNames(productInfoStyles.price, {[productInfoStyles.new]: Boolean(oldPrice)})}>
                    {currentPrice}₽
                </span>
                {Boolean(oldPrice) &&
                <span data-testid="product-info-old-price"
                      className={classNames(productInfoStyles.price, productInfoStyles.old)}>{oldPrice}₽</span>}
            </div>
            <div className={productInfoStyles.infoContainer}>
                {Boolean(flowersCount) && <LabelWithIcon testId={"flowers-count"} label={`${flowersCount} шт.`} iconName={"flowersCount"}/>}
                {Boolean(bouquetHeight) && <LabelWithIcon testId={"bouquet-height"} label={`${bouquetHeight} см`} iconName={"bouquetHeight"}/>}
                {Boolean(bouquetWidth) && <LabelWithIcon testId={"bouquet-width"} label={`${bouquetWidth} см`} iconName={"bouquetWidth"}/>}
            </div>
        </div>
    );
};