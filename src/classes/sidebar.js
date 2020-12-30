import { TitleBlock, TextBlock } from './blocks'
import { block } from '../utils'

export class Sidebar {
    constructor(selector, updateCallback) {
        this.el = document.querySelector(selector)
        this.update = updateCallback

        this.init()
    }

    init() {
        this.el.insertAdjacentHTML('afterbegin', this.template)
        this.el.addEventListener('submit', this.add)
    }

    get template() {
        return block('text')
    }

    add = (e) => {
        e.preventDefault()

        const type = e.target.type
        const value = e.target.value.value
        const styles = e.target.styles.value


        let newBlock

        type === 'title'
            ? newBlock = new TitleBlock(value, { styles })
            : newBlock = new TitleBlock(value, { styles })

        console.log('Sidebar.newBlock', newBlock)
        this.update(newBlock)

        e.target.value.value = ''
        e.target.styles.value = ''
    }
}

