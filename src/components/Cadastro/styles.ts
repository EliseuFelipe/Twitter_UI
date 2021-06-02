import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 15px 35px rgba(50,50,93,.1),0 5px 15px rgba(0,0,0,.07);

    height: 500px;
    width: 50%;
    align-items: center;
    min-width: 450px;

    margin: 0 auto;
    margin-top: 50px;
    

    .titulo{
        font-size: 35px;
        

    }

`;

export const Header = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
`;

export const BackIcon = styled(BiArrowBack)`
    // margin: top right bottom left;
    width: 40px;
    height: 40px;
    display: flex;
    margin: auto 0 auto 15%;
    &:hover{
        cursor: pointer;
    }

`;

export const TwitterIcon = styled(FaTwitter)`
    width: 44px;
    height: 44px;
    display: flex;
    margin-left: 25%;
    color: #1DA1F2;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;

    >form{
        display: flex;
        flex-direction: column;

        width: 70%;
        margin: 20px auto 0 auto;
        align-items: center;
        
        >input{
            padding-left: 10px;
            width: 100%;
            height: 50px;     
            outline: none;
            border: 1px solid;
            border-radius: 5px;
            font-size: 16px;

            &:focus{
                border: 3px solid #40C2E5;
            }
        }

        >input:not(:first-child){
            margin-top: 15px;    
        }
    }

    
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    font-family: arial;
    margin-top: 15px;

    .cabecalho{
        font-weight: 600;
    }
    .msg{
        font-size: 14px;
    }
`;

export const Nascimento = styled.div`
    display: flex;
    margin-top: 20px;

    width: 70%;
    height: 50px;
    justify-content: space-between;

    >select{
        font-size: 15px;
        border-radius: 5px;
        outline: none;
        background: white;

        &:focus{
            border: 3px solid #40C2E5;
            background: white;
        }
        &:hover{
            cursor: pointer;
        }
    }

    .mes{
        width: 40%;
    }

    .dia{
        width: 20%;
    }

    .ano{
        width: 25%;
        padding-right: 1px;
    }
`;