import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Text,
} from "@react-email/components";
import * as React from "react";

interface SubmissionsEmailProps {
  userFirstname: string;
}

export const SubmissionsEmail = ({ userFirstname }: SubmissionsEmailProps) => (
  <Html>
    <Head />

    <Body style={main}>
      <Container style={container}>
        <Text style={title}>WaitArt</Text>

        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thank you for joining WaitArt's waitlist! 🎉
        </Text>
        <Text style={paragraph}>
          You are now on the list to be notified first when we launch. Stay tuned
          for updates, after verified you submitted by click here
        </Text>

        <Text style={paragraph}>
          Best,
          <br />
          The WaitArt Team
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

SubmissionsEmail.PreviewProps = {
  userFirstname: "Alan",
} as SubmissionsEmailProps;

export default SubmissionsEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const title = {
  fontSize: "28px",
  lineHeight: "30px",
  fontWeight: "bold",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};
