import { Container, Content, Row } from "./styles"; // Importa os componentes estilizados
import { useState } from "react"; // Importa o hook useState para gerenciar estados

import Button from "./components/Button"; // Importa o componente Button
import Input from "./components/Input"; // Importa o componente Input
import styled from "styled-components"; // Importa styled-components para estilização

const App = () => {

  // Estados para armazenar o número atual, o primeiro número da operação, e a operação
  const [currentNumber, setCurrentNumber] = useState('0'); // Estado para o número atual no display
  const [firstNumber, setFirstNumber] = useState('0'); // Estado para o primeiro número na operação
  const [operation, setOperation] = useState(''); // Estado para a operação selecionada

  // Função para adicionar um número ou ponto ao número atual
  const handleAddNumber = (num) => {
    // Se o número atual for '0' e o usuário adicionar um ponto, exibe '0.' no display
    if (currentNumber === '0' && num === '.') {
      setCurrentNumber('0.');
      return;
    }
    // Atualiza o número atual concatenando o novo número ou ponto
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  // Função para somar os números
  const handleSumNumbers = () => {
    // Se ainda não há um primeiro número, define o número atual como o primeiro número
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+'); // Define a operação como soma
    } else {
      // Realiza a soma, atualiza o display e reseta a operação
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  // Função para subtrair os números
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-'); // Define a operação como subtração
    } else {
      const sub = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  // Função para multiplicar os números
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*'); // Define a operação como multiplicação
    } else {
      const mult = parseFloat(firstNumber) * parseFloat(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }

  // Função para dividir os números
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/'); // Define a operação como divisão
    } else {
      const div = parseFloat(firstNumber) / parseFloat(currentNumber);
      setCurrentNumber(String(div.toFixed(2))); // Define a precisão para duas casas decimais
      setOperation('');
    }
  }

  // Função para calcular o resultado final com base na operação
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers(); // Chama a função de soma
          break;
        case '-':
          handleSubNumbers(); // Chama a função de subtração
          break;
        case '*':
          handleMultNumbers(); // Chama a função de multiplicação
          break;
        case '/':
          handleDivNumbers(); // Chama a função de divisão
          break;
        default:
          break;
      }
    }
  }

  // Função para limpar o display e resetar os estados
  const handleOnClear = () => {
    setCurrentNumber('0'); // Reseta o número atual para '0'
    setFirstNumber('0'); // Reseta o primeiro número para '0'
    setOperation(''); // Reseta a operação para vazio
  }

  return (
    <Container> {/* Componente estilizado que engloba a aplicação */}
      <Content> {/* Componente estilizado que contém o conteúdo da calculadora */}
        <Input value={currentNumber} /> {/* Componente de entrada que exibe o número atual */}
        <Row> {/* Componente estilizado que agrupa os botões */}
          <Button label="X" onClick={handleMultNumbers} /> {/* Botão para multiplicar */}
          <Button label="/" onClick={handleDivNumbers} /> {/* Botão para dividir */}
          <Button label="-" onClick={handleSubNumbers} /> {/* Botão para subtrair */}
          <Button label="+" onClick={handleSumNumbers} /> {/* Botão para somar */}
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} /> {/* Botão para adicionar o número 7 */}
          <Button label="8" onClick={() => handleAddNumber('8')} /> {/* Botão para adicionar o número 8 */}
          <Button label="9" onClick={() => handleAddNumber('9')} /> {/* Botão para adicionar o número 9 */}
          <Button label="C" onClick={handleOnClear} /> {/* Botão para limpar o display */}
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} /> {/* Botão para adicionar o número 4 */}
          <Button label="5" onClick={() => handleAddNumber('5')} /> {/* Botão para adicionar o número 5 */}
          <Button label="6" onClick={() => handleAddNumber('6')} /> {/* Botão para adicionar o número 6 */}
          <Button label="." onClick={() => handleAddNumber('.')} /> {/* Botão para adicionar um ponto */}
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} /> {/* Botão para adicionar o número 1 */}
          <Button label="2" onClick={() => handleAddNumber('2')} /> {/* Botão para adicionar o número 2 */}
          <Button label="3" onClick={() => handleAddNumber('3')} /> {/* Botão para adicionar o número 3 */}
          <Button label="0" onClick={() => handleAddNumber('0')} /> {/* Botão para adicionar o número 0 */}
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals} className={styled.equal} /> {/* Botão para calcular o resultado */}
        </Row>
      </Content>
    </Container>
  );
}

export default App; // Exporta o componente App para ser utilizado em outros lugares
