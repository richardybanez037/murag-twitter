import { Body, Button, Head, Heading, Html, Section, Tailwind, Text } from '@react-email/components'

interface IEmailTemplate{
    to: string,
    url: string
}

const EmailTemplate = ({to, url}:IEmailTemplate) => {
    return <Html>
        <Head />
        <Body>
            <Tailwind>
                <Section className='text-center'>
                    <Heading className='text-xl text-center text-blue-500'>
                        Murag-Twitter
                    </Heading>
                    <Text>Welcome {to}!,</Text>
                    <Text>
                        We&apos;re excited to have you join our community! 
                        This is your space to share thoughts, connect with others, and be part of the conversation. 
                        Whether you&apos;re here to post, engage, or just scroll, you&apos;re in the right place.
                    </Text>
                    <Text>Click the button below to start!</Text>
                    <Button href={url} className='p-2 text-white bg-blue-500 rounded-sm'>Verify email</Button>
                    <Text>Best regards, Richard Ybañez</Text>
                </Section>
            </Tailwind>
        </Body>
    </Html>
}

export default EmailTemplate