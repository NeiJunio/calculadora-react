import { InputContainer } from "./style"; // Importa o container estilizado para o componente Input

// Componente Input que exibe o valor da calculadora
const Input = ({ value }) => {
    return (
        <InputContainer> {/* Componente estilizado que envolve o input */}
            <input disabled value={value} /> {/* Campo de entrada para exibir o valor atual, desativado para ser somente leitura */}
        </InputContainer>
    );
}

export default Input; // Exporta o componente Input para ser utilizado em outros lugares
