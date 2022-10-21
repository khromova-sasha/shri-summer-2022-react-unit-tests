import {ProductInfo} from "./ProductInfo";
import "./ProductInfo.module.css";
import {render, screen} from "@testing-library/react";
import {ProductCard} from "../product-card/ProductCard";

describe('Компонент ProductInfo', () => {
    it("Отображает имя букета",() => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);
        expect(screen.queryByText('Букет')).toBeInTheDocument();
    });

    it('Отображать старую цену, если она задана', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('product-info-old-price').length).toBe(1);
    });

    it('Отображать количество цветов, если задано', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('flowers-count').length).toBe(1);
    });

    it('Отображать высоту букета, если задано', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-height').length).toBe(1);
    });

    it('Отображать ширину букета, если задано', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-width').length).toBe(1);
    });

    it('Не отображать старую цену, если не задана или 0', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={undefined}/>);

        expect(screen.queryAllByTestId('product-info-old-price').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={null}/>);

        expect(screen.queryAllByTestId('product-info-old-price').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={0}/>);

        expect(screen.queryAllByTestId('product-info-old-price').length).toBe(0);
    });

    it('Не отображать количество цветов, если не задано или 0', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={undefined} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('flowers-count').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={null} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('flowers-count').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={10} currentPrice={100}
                            flowersCount={0} title={'Букет'} oldPrice={100}/>);

        expect(screen.queryAllByTestId('flowers-count').length).toBe(0);
    });

    it('Не отображать высоту букета, если не задана или 0', () => {
        render(<ProductInfo bouquetHeight={undefined} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-height').length).toBe(0);

        render(<ProductInfo bouquetHeight={null} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-height').length).toBe(0);

        render(<ProductInfo bouquetHeight={0} bouquetWidth={10} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={100}/>);

        expect(screen.queryAllByTestId('bouquet-height').length).toBe(0);
    });

    it('Не отображать ширину букета, если не задана или 0', () => {
        render(<ProductInfo bouquetHeight={10} bouquetWidth={undefined} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-width').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={null} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={1000}/>);

        expect(screen.queryAllByTestId('bouquet-width').length).toBe(0);

        render(<ProductInfo bouquetHeight={10} bouquetWidth={0} currentPrice={100}
                            flowersCount={10} title={'Букет'} oldPrice={100}/>);

        expect(screen.queryAllByTestId('bouquet-width').length).toBe(0);
    });
});
