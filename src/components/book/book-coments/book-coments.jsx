import { useState } from 'react';

import emtyStar from '../../../icons/book-images/emptyStar_icon.svg'
import star from '../../../icons/book-images/start_icon.svg'
import userIcon from '../../../icons/comment_icon.svg'

import './book-coments.scss'


export const BookComents = () => {
    const [showComments, setShownComments] = useState(false)


    return (
        <div className='book-coments'>
            <div className='comments-head'>
                <div className='show-comments'>
                    <h5>Отзывы </h5>
                    <div onClick={() => setShownComments(!showComments)} role='presentation' className={showComments ? 'show-comments-icon toggle' : 'show-comments-icon'} data-test-id='button-hide-reviews' />
                </div>
            </div>
            {showComments ?
                <div className='feed-back'>
                    <div className='comment one'>
                        <div className='user-name-data'>
                            <div >
                                <img src={userIcon} alt={userIcon} />
                            </div>
                            <div className='name-date'>
                                <div>Иван Иванов</div>
                                <div>5 января 2019</div>
                            </div>

                        </div>
                        <div className='bookItem-rating-star'>
                            {[0, 1, 2, 3, 4].map((__, index) =>
                                <img src={index === 4 ? emtyStar : star} alt={star} key={Math.random()} />
                            )}
                        </div>
                    </div>
                    <div className='comment two'>
                        <div className='user-name-data'>
                            <div >
                                <img src={userIcon} alt={userIcon} />
                            </div>
                            <div className='name-date'>
                                <div>Николай Качков</div>
                                <div>20 июня 2018</div>
                            </div>
                        </div>
                        <div className='bookItem-rating-star'>
                            {[0, 1, 2, 3, 4].map((__, index) =>
                                <img src={index === 4 ? emtyStar : star} alt={star} key={Math.random()} />
                            )}
                        </div>
                        <div className='word'>
                            Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                        </div>
                    </div>
                    <div className='comment'>
                        <div className='user-name-data'>
                            <div >
                                <img src={userIcon} alt={userIcon} />
                            </div>
                            <div className='name-date'>
                                <div>Екатерина Беляева</div>
                                <div>18 февраля 2018</div>
                            </div>
                        </div>
                        <div className='bookItem-rating-star'>
                            {[0, 1, 2, 3, 4].map((__, index) =>
                                <img src={index === 4 ? emtyStar : star} alt={star} key={Math.random()} />
                            )}
                        </div>

                    </div>
                </div>
                : null}
            <button data-test-id='button-rating' type='button' className='set-a-comment'>оценить книгу</button>



        </div>
    )
};
