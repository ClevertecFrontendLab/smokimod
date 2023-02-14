import './additional-info-book.scss'

export const AdditionalInfoBook = () => (
    <div className='additionalInfo'>
        <h5>Подробная информация</h5>
        <div className='table-info'>
            <div className='tableOne'>
                <table>
                    <tbody>
                        <tr>
                            <th className='th-head'>Издательство</th>
                            <td>Питер</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Год издания</th>
                            <td>2019</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Страниц</th>
                            <td>288</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Переплёт</th>
                            <td>Мягкая обложка</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Формат</th>
                            <td>70х100</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='tableTwo'>
                <table>

                    <tbody>
                        <tr>
                            <th className='th-head'>Жанр</th>
                            <td>Компьютерная литература</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Вес</th>
                            <td>370 г</td>
                        </tr>
                        <tr>
                            <th className='th-head'>ISBN</th>
                            <td>978-5-4461-0923-4</td>
                        </tr>
                        <tr>
                            <th className='th-head'>Изготовитель</th>

                            <td className='td-head'>ООО «Питер Мейл». РФ, 198206, г.Санкт-Петербург, Петергофское ш, д.73, лит. А29</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
)
