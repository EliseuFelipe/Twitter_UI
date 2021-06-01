import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding-top: 20px;
    width: 550px;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    background: green;
    .titulo{
        font-size: 35px;
        

    }

`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
`;

export const BackIcon = styled(BiArrowBack)`
    width: 40px;
    height: 40px;
    display: flex;
    margin-top: auto;
    margin-bottom: auto;
`;

export const TwitterIcon = styled(FaTwitter)`
    width: 44px;
    height: 44px;
    display: flex;
    margin-right: 250px;
    color: #1DA1F2;
`;

export const Inputs = styled.div`
    >form{
        display: flex;
        flex-direction: column;
        width: 70%;
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nascimento = styled.div``;