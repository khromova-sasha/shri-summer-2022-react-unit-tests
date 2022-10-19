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
                <span className={classNames(productInfoStyles.price, {[productInfoStyles.new]: Boolean(oldPrice)})}>{currentPrice}₽</span>
                {Boolean(oldPrice) &&
                <span className={classNames(productInfoStyles.price, productInfoStyles.old)}>{oldPrice}₽</span>}
            </div>
            <div className={productInfoStyles.infoContainer}>
                <LabelWithIcon label={`${flowersCount} шт.`} iconName={"flowersCount"}/>
                <LabelWithIcon label={`${bouquetHeight} см`} iconName={"bouquetHeight"}/>
                <LabelWithIcon label={`${bouquetWidth} см`} iconName={"bouquetWidth"}/>
            </div>
        </div>
    );
};