import './userCard.css';

function UserCard({id, name, email}){
    return (
        <div>
            <span>Id: {id} </span>
            <span>Nome: {name} </span>
            <span>E-mail: {email} </span>
        </div>
    );
}

export default UserCard;