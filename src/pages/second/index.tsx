import React from 'react';
import ReactPlayer from 'react-player';
import { Wrapper, Text } from './styles';

const Second: React.FC = () => {
    return (
        <Wrapper>
            <Text>SECOND VIDEO</Text>
            <ReactPlayer
                url="	https://www.youtube.com/watch?v=jNgP6d9HraI"
                controls
            />
        </Wrapper>
    );
};

export default Second;
