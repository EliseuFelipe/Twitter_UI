import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >img{
        margin-top: 30px;
        margin-bottom: 30px;
        height: 50px;
        width: 60px;
    }
    >span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        font-weight: 600;
    }
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin-top: 30px;
    
    >input{
        height: 55px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid rgba(0,0,0,0.40);
        outline: none;
        padding-left: 10px;

        &:focus{
            border: 3px solid #40C2E5;
        }
    }

    >input::placeholder{
        color: rgba(0,0,0,0.50);
        padding-left: 5px;
        
    }

    >input:not(:first-child){
        margin-top: 15px;
    }

    >button{
        margin-top: 15px;
        height: 45px;
        border: none;
        border-radius: 30px;
        outline: none;
        background-color: rgb(29, 161, 242);
        
        color: white;
        font-weight: 600;
        font-size: 16px;

        &:hover{
            cursor: pointer;
            box-shadow: 0 4px rgba(0,0,0,0.30);
        }

        &:active{
            background: #BABFB7;
        }
    }

`;

export const Links = styled.div`
    display: flex;
    width: 400px;
    margin-top: 26px;

    justify-content: space-between;
    
    >a{
        color: #1DA1F2;
        text-decoration: none;
        font-weight: 600;
        font-family: arial;

        cursor: pointer;
    }
`;

