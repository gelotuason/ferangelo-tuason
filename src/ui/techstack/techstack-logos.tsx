import bootstrap from '../../../public/bootstrap.png';
import chakraUI from '../../../public/chakra-ui.png';
import css from '../../../public/css.png';
import firebase from '../../../public/firebase.png';
import git from '../../../public/git.png';
import github from '../../../public/github.png';
import html from '../../../public/html.png';
import javascript from '../../../public/js.png';
import materialUI from '../../../public/mui.png';
import next from '../../../public/next.png';
import react from '../../../public/react.png';
import shadcn from '../../../public/shadcn.png';
import tailwindcss from '../../../public/tailwind-css.png';

import Image from 'next/image';

const imageProperties = [
    { src: html, width: 30, height: 30 },
    { src: css, width: 30, height: 30 },
    { src: javascript, width: 30, height: 30 },
    { src: react, width: 30, height: 30 },
    { src: next, width: 30, height: 30 },
    { src: firebase, width: 30, height: 30 },
    { src: tailwindcss, width: 30, height: 30 },
    { src: shadcn, width: 30, height: 30 },
    { src: materialUI, width: 30, height: 30 },
    { src: bootstrap, width: 30, height: 30 },
    { src: chakraUI, width: 30, height: 30 },
    { src: git, width: 30, height: 30 },
    { src: github, width: 30, height: 30 },
]


export default function TechstackLogos() {
    return (
        <figure className='grid grid-cols-5 gap-4 mt-6 items-center'>
            {
                imageProperties.map((property, index) => {
                    return (
                        <Image
                            key={index}
                            src={property.src}
                            width={50}
                            height={50}
                            alt='Tech Stack Logo'
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    )
                })
            }
        </figure>
    )
}