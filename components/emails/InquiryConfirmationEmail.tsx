import { Html, Head, Preview, Body, Container, Heading, Text } from '@react-email/components';

interface Props { name: string; }
export default function InquiryConfirmationEmail({ name }: Props) {
  return (
    <Html lang='en'>
      <Head />
      <Preview>Thanks for contacting MKM Garage</Preview>
      <Body>
        <Container>
          <Heading>Thanks, {name}!</Heading>
          <Text>We received your inquiry and will get back to you soon.</Text>
        </Container>
      </Body>
    </Html>
  );
}
