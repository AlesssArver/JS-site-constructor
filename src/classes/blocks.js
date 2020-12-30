import { row, col, css } from '../utils'

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Method toHTML must be released')
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { tag = 'p', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles } = this.options
        let html = this.value.map(col).join('')
        return row(html, styles)
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles, imageStyles: is, alt = "" } = this.options
        return row(`
        <img
            src="${this.value}" 
            alt="${alt}" 
            style="${css(is)}" 
        />`, styles)
    }
}