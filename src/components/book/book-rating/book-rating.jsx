import emtyStar from '../../../icons/book-images/emptyStar_icon.svg'
import star from '../../../icons/book-images/start_icon.svg'

import './book-rating.scss'

export const BookRating = () => (
    <div className='bookItem-rating'>
        <div className='user-score'>
            <h5>Рейтинг</h5>
            <div className='bookItem-rating-star res'>
                {[0, 1, 2, 3, 4].map((__, index) =>
                    <img className='rating-start' src={index === 4 ? emtyStar : star} alt={star} key={Math.random()} />
                )}
                <div className='score'>4.3</div>
            </div>
        </div>
    </div>
);