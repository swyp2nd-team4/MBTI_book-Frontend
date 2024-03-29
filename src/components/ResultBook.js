import React from 'react';
import styled from "styled-components";

const ContainerWithColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Column = styled.div`
    height: 1553px;
    width: 42px;
    background-color: #84c3a5;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    margin-right: 10px;
    
    @media screen and (max-width: 768px) {
        height: 832px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #ecffe2;
    padding: 50px;
    width: 100% - 42px;
    max-width: 786px;
    height: 800px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    
    @media screen and (max-width: 768px) {
        height: 550px;
        padding: 20px;
    }
`;

const Title = styled.div`
    font-family: 'Gasoek One';
    font-size: 60px;
    text-align: center;
    letter-spacing: 2px;
    color: #326a4f;
    
    @media screen and (max-width: 768px) {
        font-size: 25px;
        letter-spacing: 0.41px;
    }
`;

const Imgbox = styled.img`
    max-height: 400px;
    margin: 100px;
    transform: rotate(45deg);
    
    @media screen and (max-width: 768px) {
        max-height: 200px;
    }
`
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #84c3a5;
    padding: 50px;
    width: 100% - 42px;
    max-width: 786px;
    height: 553px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    
    @media screen and (max-width: 768px) {
        padding: 20px;
        height: 200px;
    }
`;

const Description = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    letter-spacing: -2px;
    text-align: left;
    color: #000000;
    margin-bottom: 200px;
    
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

function ResultBook({name, imgUrl, description}) {
    return (
        <ContainerWithColumn>
            <Column></Column>
            <div>
                <TitleContainer>
                    <Title>당신의 책갈피는?</Title>
                    <Imgbox src={imgUrl} />
                    <Title>{name}</Title> 
                </TitleContainer>
                <DescriptionContainer>
                    <Description>
                    {description}
                    </Description>
                </DescriptionContainer>
            </div>
        </ContainerWithColumn>
    );
}
  
export default ResultBook;