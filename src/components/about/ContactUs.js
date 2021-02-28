import Styled from "styled-components";

const ContactUs = () => {
	return (
		<ContactUsDiv>
			<ContainerDiv>
				<h1>Contact Us</h1>
				<ContactUsContent>
					<LeftCol>
						<form action="" method="post">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" id="" text="Name" />
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
background: #323347;
color: white;
h1{
    width: 100%;
    padding: 1em;
}
`;

const ContainerDiv = Styled.div`
width: 1200px;
margin: 0 auto;

`;

const ContactUsContent = Styled.div`
display:flex;
padding-bottom: 5em;
`;
const LeftCol = Styled.div`
width: 50%;
margin: 3em 3em 0 5em;
form{
    display: block;
    button{
        border: 1px solid #4f4d65;
		border-radius: 20px;
		color:  white;
		padding: .7rem 2rem;
        background: none;
        cursor: pointer;
        display: block;
        margin-top: 2em;
    
    }
    label{
        margin-top: 2em;
    }
    input{
        display: block;
        border: 1px solid #4f4d65;
        color: white;
        background:none;
        padding: 1em;
        margin-top: 2em;
        width: 100%;
    }
    textarea{
        display: block;
        border: 1px solid #4f4d65;
        color: white;
        background:none;
        padding: 1em;
        margin-top: 2em;
        width: 100%;
    }
}
`;
const RightCol = Styled.div`
width: 50%;
margin: 3em 3em 0 5em;
}
`;

export default ContactUs;
