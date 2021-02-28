import Styled from "styled-components";

const ContactUs = () => {
	return (
		<ContactUsDiv>
			<ContainerDiv>
				<ContactUsContent>
					<h1>Contact Us</h1>
					<LeftCol>
						<form action="" method="post">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="" />
							<label htmlFor="email">Email</label>
							<input type="text" name="email" id="" />
							<textarea name="emailText" id="" cols="30" rows="10"></textarea>
							<button type="submit">Send</button>
						</form>
					</LeftCol>
					<RightCol>mapas</RightCol>
				</ContactUsContent>
			</ContainerDiv>
		</ContactUsDiv>
	);
};

const ContactUsDiv = Styled.div`
background: #dfe1ed;
`;

const ContainerDiv = Styled.div`
width: 1200px;
margin: 0 auto;

`;

const ContactUsContent = Styled.div`
display:flex;
`;
const LeftCol = Styled.div`
width: 50%;
margin: 12em 3em 0 5em;
form{
    display: block;
}

}
`;
const RightCol = Styled.div`
width: 50%;
margin: 12em 3em 0 5em;
}
`;

export default ContactUs;
