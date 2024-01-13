import { ITEMS_PER_PAGE } from '../../../constants.js'
import Home from '../../home/index.js'

//objet pagination
const Pagination = {
    /**
     * 
     * @param {number} numberOfSensors 
     * @returns {number}
     */
    //methode de l'objet
    getNumberOfPages: (numberOfSensors) => Math.ceil(numberOfSensors / ITEMS_PER_PAGE),
    //methode de l'objet
    render: (numberOfSensors) => {
        const numberOfPages = Pagination.getNumberOfPages(numberOfSensors)

        let $paginationList = '<ul class="pagination-list" data-testid="pagination-list">'

        for (let i = 1; i <= numberOfPages; i++) {
            $paginationList += `
                <li class="pagination-list-item">
                    <a href="#/home">
                        ${i}
                    </a>
                </li>
            `
        }

        $paginationList += '</ul>'

        return $paginationList
    },
    //methode de l'objet
    handlePagination: () => {
        const $pagination = document.querySelector('.pagination-list')

        $pagination.addEventListener('click', (e) => {
            const page = Number(e.target.textContent.trim())
            Home.onChangePage(ITEMS_PER_PAGE * (page - 1))
        })
    }
}

export default Pagination
