import { useSelector } from "react-redux"

export const CategoryFilter = (param) => {
    const categoryes = useSelector((state) => state.books.categories);
    let findCategory = ''

    categoryes.forEach((i) => {
        if (i.name.includes(param)) {
            findCategory += i.path

        }
    })


    return findCategory
}
