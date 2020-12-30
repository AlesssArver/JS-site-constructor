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
        return [
            block('text'),
            // block('columns'),
        ].join('')
    }

    add = (e) => {
        e.preventDefault()

        const type = e.target.type
        const tag = e.target.tag.value
        const value = e.target.value.value
        const background = e.target.background.value
        const color = e.target.color.value
        const marginTop = e.target.marginTop.value
        const marginBottom = e.target.marginBottom.value

        const styles = {
            background,
            color,
            'margin-top': marginTop,
            'margin-bottom': marginBottom,
        }

        let newBlock

        if (type === 'text') {
            newBlock = new TextBlock(value, { tag, styles })
        }

        this.update(newBlock)

        e.target.value.value = ''
        e.target.styles = {}
    }
}

