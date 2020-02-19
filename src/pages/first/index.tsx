import React from 'react';
import ReactPlayer from 'react-player';
import { Wrapper, Text } from './styles';

const First: React.FC = () => {
    return (
        <Wrapper>
            <Text>FIRST VIDEO</Text>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
                controls
            />
        </Wrapper>
    );
};

export default First;
