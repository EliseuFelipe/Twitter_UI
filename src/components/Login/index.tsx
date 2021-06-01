import React from 'react';

import { Container, Header, Inputs, Links } from './styles';
import TwitterLogo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <Container>
            <Header>
                <img alt="TwitterLogo" src={TwitterLogo}/>
                <span>Entrar no Twitter</span>
            </Header>

            <Inputs>
                <input type="text" placeholder="Celular, e-mail ou nome de usuário" id="usuario"/>
                <input type="password" placeholder="Senha" id="senha"/>
                <button type="submit">Entrar</button>
            </Inputs>

            <Links>
                <a href="/">Esqueceu sua senha?</a>
                <Link to="/Cadastro">Inscrever-se no Twitter</Link>
            </Links>

        </Container>
    );
};

export default Login;