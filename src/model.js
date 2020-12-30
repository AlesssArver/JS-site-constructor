import image from './assets/image.jpg'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'

export const model = [
    new TitleBlock('SIte constructor on pure JS', {
        tag: 'h1',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: 'white',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new TextBlock('here we go with some text', {
        tag: 'p',
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock([
        '11111',
        '22222',
        '33333',
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    })
]