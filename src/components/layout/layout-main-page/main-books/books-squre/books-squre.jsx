import { Link } from 'react-router-dom'

import altBookImage from '../../../../../icons/book-images/catAvatar_icon.svg'
import emtyStar from '../../../../../icons/book-images/emptyStar_icon.svg'
import star from '../../../../../icons/book-images/start_icon.svg'
import bookImage from '../../../../../images/book_image.svg'

import './books-squre.scss'


export const BookSqure = ({ showPlate }) => {


    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

    return (
        showPlate ? <div className="books-container">
            {arr.map((_, i) => (
                (
                    <Link to={`/book/all/bookId/${i}`} key={Math.random()} id='card' >
                        <div className='book-card' data-test-id='card'>
                            <div className="book-wraper">
                                <div className='book-img-container'><img className='book-img' src={i === 0 || i === 9 ? altBookImage : bookImage} alt={altBookImage} /> </div>
                                {i === 0 ? <div className='book-rating'>ещё нет отзывов</div> : <div className='book-rating star'>
                                    {[0, 1, 2, 3, 4].map((__, index) =>
                                        <img src={index === 4 ? emtyStar : star} alt={star} key={Math.random()} />
                                    )}
                                </div>}
                                <div className="subtitle">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                                <div className="book-autor">Адитья Бхаргава, 2019</div>

                                <button type='button' className={i === 2 || i === 5 ? 'order item' : i === 4 ? 'order item alt' : 'order'}>{i === 2 || i === 5 ? 'Занята до 03.05' : i === 4 ? 'Забронировна' : 'Забронировать'}</button>
                            </div>
                        </div>
                    </Link>
                )
            ))}
        </div> : null

    )


}


