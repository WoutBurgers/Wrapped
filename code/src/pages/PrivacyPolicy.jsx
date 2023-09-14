import React from 'react'
import HomeButton from '../components/HomeButton'

export default function PrivacyPolicy() {
    return (
        <div className="standard-style">
            <HomeButton />
            <div style={{ marginTop: '100px', width: '50%' }}>
                <h1>Privacy Policy</h1>
                <p>
                    This Privacy Policy describes how Lets Get Wrapped collects, uses, and shares information obtained
                    from users who interact with our website. We are committed to protecting your privacy and ensuring
                    the security of your personal data.
                </p>

                <h3>Information We Collect</h3>
                <p>
                    We do not collect any personal information from our users. Our website only locally processes the
                    data you provide for the purpose of analyzing your social media behavior.
                </p>

                <h3>How We Use Your Data</h3>
                <p>
                    The data you provide is solely used for the purpose of analyzing your social media behavior. We do
                    not store this data, and all processing is done locally on your device.
                </p>

                <h3>Third-Party Services</h3>
                <p>We do not use third-party services to collect or process your data.</p>

                <h3>Cookies</h3>
                <p>We do not use cookies on our website.</p>

                <h3>Security</h3>
                <p>
                    We take reasonable precautions to protect your data, but please be aware that no method of
                    transmission over the internet or electronic storage is entirely secure. We cannot guarantee the
                    absolute security of your data.
                </p>

                <h3>Changes to this Privacy Policy</h3>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page. Please review this Privacy Policy periodically to stay
                    informed.
                </p>

                <h3>Contact Us</h3>
                <p>
                    If you have any questions or concerns about our Privacy Policy, please contact us at [Your Contact
                    Information].
                </p>
            </div>
        </div>
    )
}
