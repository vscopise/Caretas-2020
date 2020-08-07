import React from 'react';
import { Global, css, Head } from 'frontity';
import Title from './title';
import Header from './header/';
import {
    Box,
    CSSReset,
    theme,
    Text,
    ThemeProvider
} from '@chakra-ui/core';
import FontFace from './styles/font-face';
import { connect } from 'frontity';

const Theme = ({ state }) => (
    <ThemeProvider
        theme={{
            ...theme,
            fonts: {
                ...theme.fonts,
                body: '"PT Serif", sans-serif',
                heading: '"Oswald", Helvetica, sans-serif'
            }
        }}

    >
        <FontFace />
        <CSSReset />
        <Global styles={globalStyles} />

        <Title />
        <Head>
            <meta name="description" content={state.theme.description} />
            <html lang="es" />
        </Head>

        <Box
            bg='#ffffff'
            w={[
                "85%", // base
                "50%", // 480px upwards
                "25%", // 768px upwards
                "90%", // 992px upwards
            ]}
            maxW="1180px"
            m='0 auto'
            h='100vh'
            p='0 20px 20px'
        >
            <Header />
            <Text
                fontFamily='heading'
            >heading</Text>
            <p>paragraph</p>
            <p><em>paragraph</em></p>
            <p><strong>paragraph</strong></p>
            <p><em><strong>paragraph</strong></em></p>
        </Box>
    </ThemeProvider >
);


export default connect(Theme);

const globalStyles = css`
    body {
        background: #efefef;
    }
`;