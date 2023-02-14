import { useParams } from 'react-router-dom';

import { AdditionalInfoBook } from './additional-info-book/additional-info-book';
import { BookComents } from './book-coments/book-coments';
import { BookRating } from './book-rating/book-rating';
import { BookSlider } from './book-slider/book-slider';

import './book-page.scss';

export const BookPage = () => {
    const { id } = useParams();

    return (
        <div className='book-container'>
            <div className='book-list-mimi'>
                <div className='list-container'>
                    Бизнес книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                </div>
            </div>
            <div className='book-holder'>
                <section className='book-page'>
                    <div className='book-name'>
                        <div className='book-information' >
                            <BookSlider id={Number(id)} />
                        </div>
                        <div className='detail-head'>
                            <h3>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</h3>
                            <div className='book-subtitle'>Адитья Бхаргава, 2019</div>
                            <button type='button' className='order-book-btn'>
                                Забронировать
                            </button>
                        </div>
                        <div className='book-about'>
                            <div>
                                <h5>О книге</h5>
                            </div>
                            <p className='description-item'>
                                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
                                решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
                                изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
                                время?
                            </p>
                            <p className='description-item'>
                                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                                алгоритмы — это веселое и увлекательное занятие.
                            </p>
                        </div>
                    </div>

                    <div className='book-summary'>
                        <BookRating />
                        <AdditionalInfoBook />
                        <BookComents />
                    </div>
                </section>
            </div>
        </div>
    );
};
