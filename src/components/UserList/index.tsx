import React from "react";
import { Container, Role, User, Avatar} from './styles';

export interface Props{
	nickname: string,
	isBot?: boolean 
}

const UserRown: React.FC<Props> = ({nickname, isBot}) =>{
	return (
		<User>
			<Avatar className={isBot ? 'bot' : ''}/>
			<strong>{nickname}</strong>

			{isBot && <span>Bot</span>}
		</User>

	)
}
const UserList: React.FC = () =>{
	return (
		<Container>
			<Role>Disponível - 1</Role>
			<UserRown nickname = "Adulto Lelis"/>

			<Role>Offline - 25</Role>
			<UserRown nickname = "Jukebox do seu Zé" isBot/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			<UserRown nickname = "Fulano"/>
			
		</Container>
	);
};

export default UserList;