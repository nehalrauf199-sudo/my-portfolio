import { Analytics } from '@vercel/analytics/react'
import { GoogleAnalytics } from 'react-next-google-tools'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* Google Analytics */}
            <GoogleAnalytics id="G-D6H3SB370C" isNextJs={true} />

            {/* Vercel Analytics */}
            <Analytics />

            <Component {...pageProps} />
        </>
    )
}