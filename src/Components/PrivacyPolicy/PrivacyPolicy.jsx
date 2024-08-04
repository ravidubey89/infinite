import React from 'react'
import "./PrivacyPolicy.css"
const PrivacyPolicy = () => {

  return (
    <div className='commonContents'>
        <div className='container'>
          <h3>Privacy Policy</h3>
            <p> ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services.</p>
            <div className='privacy-policy-repeat'>
              <strong>Information We Collect</strong>
              <p><b>Personal Information:</b> We may collect personal information such as your name, address, email address, phone number, and payment information when you book a truck rental or contact us through our website.</p>
              <p><b>Usage Data:</b> We collect information about your interaction with our website, such as IP addresses, browser type, pages visited, and the duration of visits.</p>
            </div>


            <div className='privacy-policy-repeat'>
              <strong>How We Use Your Information</strong>
              <p>We use your personal information to provide and maintain our truck rental services.</p>
              <p>To communicate with you, including responding to your inquiries and providing customer support.</p>
              <p>To process transactions and manage bookings.</p>
              <p>To improve our website and services based on usage patterns and feedback.</p>
            </div>

            <div className='privacy-policy-repeat'>
              <strong>Disclosure of Your Information</strong>
              <p>We may disclose your personal information to third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
              <p>We may also disclose your information when legally required to do so or to protect our rights, property, or safety.</p>
            </div>

            <div className='privacy-policy-repeat'>
              <strong>Data Security</strong>
              <p>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
              <p>However, no method of transmission over the internet or electronic storage is completely secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.</p>
            </div>

            <div className='privacy-policy-repeat'>
              <strong>Your Rights</strong>
              <p>You have the right to access, correct, or delete your personal information. You may also request to receive a copy of the personal information we hold about you.</p>
              <p>You can opt-out of receiving promotional emails by following the instructions in those emails.</p>
            </div>

            <div className='privacy-policy-repeat'>
              <strong>Changes to This Privacy Policy</strong>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.</p>
            </div>

        </div>
    </div>
  )
}

export default PrivacyPolicy