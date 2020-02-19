import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10rem;
`;

export const Text = styled.div`
    font-weight: bold;
    font-size: 5rem;
    margin-bottom: 3rem;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    border: none;
    padding: 1rem;
    margin: 0 2rem;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;

    &:hover {
        background: rgba(0, 0, 0, 0.5);
    }
`;
