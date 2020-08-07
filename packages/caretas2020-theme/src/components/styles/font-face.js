import React from 'react';
import { Global, css } from 'frontity';

import oswaldMediumTTF from '../../fonts/Oswald-Medium.ttf';
import ptSerifBoldTTF from '../../fonts/PTSerif-Bold.ttf';
import ptSerifBoldItalicTTF from '../../fonts/PTSerif-BoldItalic.ttf';
import ptSerifItalicTTF from '../../fonts/PTSerif-Italic.ttf';
import ptSerifRegularTTF from '../../fonts/PTSerif-Regular.ttf';

const FontFace = () => (
    <Global 
        styles={css`
            @font-face {
                font-family: "Oswald";
                src: url(${oswaldMediumTTF}) format("truetype");
                font-weight: 500;
                font-display: swap;
            }
            @font-face {
                font-family: "PT Serif";
                src: url(${ptSerifBoldTTF}) format("truetype");
                font-weight: 700;
                font-style: normal;
                font-display: swap;
            }
            @font-face {
                font-family: "PT Serif";
                src: url(${ptSerifBoldItalicTTF}) format("truetype");
                font-weight: 700;
                font-style: italic;
                font-display: swap;
            }
            @font-face {
                font-family: "PT Serif";
                src: url(${ptSerifItalicTTF}) format("truetype");
                font-weight: 400;
                font-style: italic;
                font-display: swap;
            }
            @font-face {
                font-family: "PT Serif";
                src: url(${ptSerifRegularTTF}) format("truetype");
                font-weight: 400;
                font-style: normal;
                font-display: swap;
            }
        `}
    />
);

export default FontFace;