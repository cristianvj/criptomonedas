import React from 'react';
import styled from '@emotion/styled';

const ResultadoDiv = styled.div`
  color: #FFF;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 18px;
  
  span{
    font-weight: bold;
  }
`;

const Precio = styled.p`
 font-size: 30px;

 span{
    font-weight: bold;
  }
`;

const Cotizacion = ({resultado}) => {
  if(Object.keys(resultado).length === 0) return null;

  console.log(resultado);

  return (
    <ResultadoDiv>
      <Precio>El resultado es: <span> {resultado.PRICE} </span> </Precio>
      <Info>El precio más alto del día es: <span> {resultado.HIGHDAY} </span> </Info>
      <Info>El precio más bajo del día es: <span> {resultado.LOWDAY} </span> </Info>
      <Info>El variación últimas 24 horas es: <span> {resultado.LOW24HOUR} </span> </Info>
      <Info>Última actualización: <span> {resultado.LASTUPDATE} </span> </Info>
    </ResultadoDiv>
  );
}

export default Cotizacion;
