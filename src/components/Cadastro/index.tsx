import React from 'react';

import { Container, Header, BackIcon, TwitterIcon, Inputs, Message, Nascimento } from './styles';
import Calendario from '../../utils/calendario';

const Cadastro: React.FC = () => {
    
    return(
        <Container>
            <Header>
                <BackIcon/>
                <TwitterIcon/>
            </Header>

            <span className="titulo">Criar sua conta</span>

            <Inputs>
                <form>
                    <input type="text" placeholder="Seu nome"/>

                    <input type="email" placeholder="Seu email"/>

                    <input type="password" placeholder="Sua senha"/>
                </form>

                <Message>
                    <span>Data de nascimento</span>
                    <span>Isso não será exibido publicamente. Confirme sua própria idade, 
                    mesmo se esta conta for de empresa, de um animal de estimação ou outros.</span>
                </Message>

                <Nascimento>
                    
                    <Calendario/>

                </Nascimento>

            </Inputs>


        </Container>
    );
};

export default Cadastro;