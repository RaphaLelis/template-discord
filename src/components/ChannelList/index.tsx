import React from "react";
import { Container, Category, AddCategoryIcon} from './styles';
import ChannelButton from "../ChannelButton";

const ChannelList: React.FC = () =>{
	return (
		<Container>
			<Category>
				<span>Canais de texto</span>
				<AddCategoryIcon/>
			</Category>

			<ChannelButton channelName="geral"/>
			<ChannelButton channelName="padrex"/>
			<ChannelButton channelName="pedir-musica"/>
			<ChannelButton channelName="convidados"/>
			<ChannelButton channelName="aula-puc"/>
			<ChannelButton channelName="trampo"/>
		</Container>
	);
};

export default ChannelList;