import {render, screen} from "@testing-library/react";
import {ProductCard} from "./ProductCard";
import {faker} from '@faker-js/faker/locale/ru';

describe('Компонент «Карточка товара»', () => {
    it("Отображать хит и скидку одновременно", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={false}
                            isHit={true}
                            isSale={true}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('hit').length).toBe(1);
        expect(screen.queryAllByTestId('sale').length).toBe(1);
    });
    it('Отображать только хит', () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={false}
                            isHit={true}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('hit').length).toBe(1);
        expect(screen.queryAllByTestId('sale').length).toBe(0);
    });

    it('Отображать только скидку', () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={false}
                            isHit={false}
                            isSale={true}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('hit').length).toBe(0);
        expect(screen.queryAllByTestId('sale').length).toBe(1);
    });

    it('Не отображать хит и скидку, если их нет', () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={false}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('hit').length).toBe(0);
        expect(screen.queryAllByTestId('sale').length).toBe(0);
    });

    it("Отображать пустое сердечко", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={false}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('empty-heart').length).toBe(1);
        expect(screen.queryAllByTestId('filled-heart').length).toBe(0);
    });

    it("Отображать заполненное сердечко", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        expect(screen.queryAllByTestId('empty-heart').length).toBe(0);
        expect(screen.queryAllByTestId('filled-heart').length).toBe(1);
    });

    it("Кнопки актиынф, если товар есть", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);
        expect(screen.queryByTestId('cart-button')).not.toBeDisabled();
        expect(screen.queryByTestId('buy-button')).not.toBeDisabled();
    });

    it("Кнопки задизейблены, если нет товара", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={0}/>);
        expect(screen.queryByTestId('cart-button')).toBeDisabled();
        expect(screen.queryByTestId('buy-button')).toBeDisabled();
    });

    it("Отображать 'Нет фото', если фото undefined", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={undefined}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        setTimeout(() => expect(screen.queryByText('Нет фото')).toBeInTheDocument(), 500);
    });

    it("Отображать 'Нет фото', если фото null", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={null}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        setTimeout(() => expect(screen.queryByText('Нет фото')).toBeInTheDocument(), 500);
    });

    it("Отображать 'Нет фото', если по ссылке нет фото", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={"/imageUrl"}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        setTimeout(() => expect(screen.queryByText('Нет фото')).toBeInTheDocument(), 500);
    });

    it("Не отображать 'Нет фото', если по ссылке есть фото", () => {
        render(<ProductCard bouquetHeight={100}
                            bouquetWidth={100}
                            currentPrice={1000}
                            flowersCount={10}
                            id={"pr-card"}
                            imageUrl={faker.image.imageUrl(400, 400, 'nature', true)}
                            isFavorite ={true}
                            isHit={false}
                            isSale={false}
                            oldPrice={1500}
                            title={"букет"}
                            availableCount={10}/>);

        setTimeout(() => expect(screen.queryByText('Нет фото')).not.toBeInTheDocument(), 500);
    });
});
