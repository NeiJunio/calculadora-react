import { ButtonContainer } from "./styles"; // Importa o container estilizado para o componente Button

// Componente Button que renderiza um botão estilizado
const Button = ({ label, onClick }) => {
    return (
        <ButtonContainer onClick={onClick} type="button"> {/* Renderiza o botão estilizado com evento de clique */}
            {label} {/* Exibe o texto do botão passado como a prop 'label' */}
        </ButtonContainer>
    );
}

export default Button; // Exporta o componente Button para ser utilizado em outros lugares
