import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { 
	Container, 
	Messages, 
	InputWrapper, 
	Input, 
	InputIcon
} from './styles';

const ChannelData: React.FC = () =>{
	const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	useEffect (() =>{
		const div = messagesRef.current;

		if(div) {
			div.scrollTop = div.scrollHeight;
		}
	}, [messagesRef]);

	return (
		<Container>
			<Messages ref={messagesRef}>
			{Array.from(Array(15).keys()).map((n) =>(
				<ChannelMessage
					author="Adulto Lelis"
					date="09/06/2022"
					content="Hoje vou amassar folgado no lol"
				/>
				))}
			<ChannelMessage
				author="Jukebox do seu Zé"
				date="09/06/2022"
				content={
					<>
					<Mention>@Adulto Lelis</Mention>, me carrega no LOL aê
					</>
				}
				hasMention
				isBot
			/>
			</Messages>

			<InputWrapper>
				<Input type="text" placeholder="Conversar em #geral"/>
				<InputIcon/>
			</InputWrapper>
		</Container>
	);
};

export default ChannelData;