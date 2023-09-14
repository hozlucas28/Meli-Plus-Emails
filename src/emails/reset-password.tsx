import { Body, Head, Heading, Html, Preview, Tailwind } from '@react-email/components'

export function Email() {
	return (
		<Html>
			<Head />
			<Preview>Preview text</Preview>
			<Tailwind>
				<Body className='bg-white'>
					<Heading className='text-5xl'>¡Hola Mundo!</Heading>
				</Body>
			</Tailwind>
		</Html>
	)
}

export default Email
