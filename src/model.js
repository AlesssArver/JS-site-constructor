import image from './assets/image.jpg'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
    new TextBlock('Title', {
        tag: 'h1',
        styles: {
            color: '#2d2d2d',
            padding: '1.5rem'
        }
    }),
    new TextBlock('There very long some text. Very interesting text.Very cool text.You reading this text and want to sleep, because It\'s very boring text.', {
        tag: 'p',
        styles: {
            padding: '1rem',
        }
    }),
    // new ColumnsBlock([
    //     '11111',
    //     '22222',
    //     '33333',
    // ], {
    //     styles: {
    //         padding: '2rem'
    //     }
    // }),
    // new ImageBlock(image, {
    //     styles: {
    //         padding: '2rem 0',
    //         display: 'flex',
    //         'justify-content': 'center'
    //     },
    //     imageStyles: {
    //         width: '500px',
    //         height: 'auto'
    //     },
    //     alt: 'Это картинка'
    // })
]