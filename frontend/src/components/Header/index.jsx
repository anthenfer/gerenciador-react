import './header.css';

function Header({title, subtitle}){
    return(
        <header>
            <a href="">Usuários</a>
            <a href="">Cadastrar Usuário</a>
            <a href="">Cadastrar Endereço</a>
            <h1> {title} </h1>
            <h2> {subtitle} </h2>
        </header>
    );
};

export default Header;