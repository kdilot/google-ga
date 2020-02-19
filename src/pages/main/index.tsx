import React from 'react';
import { Wrapper, Text, Button, ButtonWrapper } from './styles';
import { Link } from 'react-router-dom';
// import ReactGA from 'react-ga';

const Main: React.FC = () => {
    const onEvent = (value: any) => {
        // ReactGA.event({
        //     category: 'Viedo',
        //     action: 'View Video Page',
        //     label: value,
        // });
        // window.gtag('event', 'View Video Page', {
        //     event_category: 'Viedo',
        //     event_label: value,
        // });
    };

    return (
        <Wrapper>
            <Text>Google GA</Text>
            <ButtonWrapper>
                <Link to="/first" onClick={() => onEvent('video 1')}>
                    <Button>VIDEO 1</Button>
                </Link>
                <Link to="/second" onClick={() => onEvent('video 2')}>
                    <Button>VIDEO 2</Button>
                </Link>
            </ButtonWrapper>
        </Wrapper>
    );
};

export default Main;
