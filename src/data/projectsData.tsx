import { esther_screenshot, ngphoto_screenshot, portfolio_screenshot, studi_screenshot } from '../assets'

interface Project {
    title: string,
    description: string,
    path: string,
    repo: string,
    img: string,
    techStack: string[],
    live: boolean
}
const projects: Project[] = [        
    {
        title: 'neil george photography',
        description: 'The Neil George Photography web app was created as a portfolio for the professional photographer Neil George. Features like the fading, scrolling image gallery on the homepage & the lightroom showing individual images on the gallery pages, were all coded from scratch. The site also operates on various key shortcuts like "m" to toggle the menu, and the left & right arrows & "esc" key to use in the lightroom.',
        path: 'http://www.neilgeorgephotography.co.uk/',
        repo: 'https://github.com/stephenngeorge/neilgeorgephotography',
        img: ngphoto_screenshot,
        techStack: ['react', 'create-react-app', 'node', 'express', 'firebase', 'react-spring', 'redux', 'heroku'],
        live: true
    },
    {
        title: 'stephen george portfolio',
        description: 'This website was built to showcase my skills & experience in web development & design. This site was written in TypeScript and uses new features like react hooks. A deliberately minimalist design with consistent elements & behaviours help beautiful code become beautiful UI. Toggle the menu with "/" & send the drawers back to where they came from with "x" or "<" / ">"',
        path: '/',
        repo: 'https://github.com/stephenngeorge/portfolio',
        img: portfolio_screenshot,
        techStack: ['react', 'typescript', 'create-react-app', 'react hooks', 'hammerjs', 'github pages'],
        live: true
    },
    {
        title: 'esther ministry',
        description: 'The Esther Ministry website was created to promote & give information about Rowena Cross & her Christian charity "Esther Ministry". Future plans for the site include an image gallery, a "talks" page with recordings of Rowena\'s teaching embedded from soundcloud, & a "blog" page where Rowena can post her writings & reflections',
        path: 'http://estherministry.org.uk/',
        repo: 'https://github.com/stephenngeorge/estherministryreact',
        img: esther_screenshot,
        techStack: ['react', 'react-spring', 'create-react-app', 'GoDaddy'],
        live: true
    },
    {
        title: 'studi',
        description: 'Studi is in its early stages of development. The vision is for a learning app that goes beyond traditional flashcard or note-taking apps & integrates everything to make studying & memorising information as streamlined as possible.',
        path: '',
        repo: 'https://github.com/stephenngeorge/cards-app',
        img: studi_screenshot,
        techStack: ['node', 'express', 'graphql', 'mongoose', 'mongodb', 'react'],
        live: false
    }
]

export default projects