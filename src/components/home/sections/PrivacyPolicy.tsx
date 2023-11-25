import React from 'react'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="mx-24 mt-12 mb-20 flex flex-col">
      <h1 className="text-3xl font-bold mb-4">
        Privacy Policy for Kleo Network
      </h1>
      <p className="text-gray-500 my-3 text-sm self-start">
        (Last updated: November 8, 2023)
      </p>
      <p>
        At Kleo Network ("we," "us," "our"), your privacy is of the utmost
        importance. This policy details the measures we take to protect your
        privacy in relation to the Kleo Network extension ("Extension"). It
        explains the types of information we collect, how we collect it, and the
        purpose behind it.
      </p>

      <p>
        This policy applies to information we collect when you use our
        Extension, as well as in any electronic communications sent through or
        in connection with the Extension.
      </p>

      <h2 className="text-xl font-bold mt-4">
        1. Information We Collect and How We Collect It
      </h2>

      <p>
        We collect various types of information from our users, including
        information:
      </p>

      <ul className="list-disc ml-8">
        <li>Provided directly by users.</li>
        <li>Collected automatically through the Extension.</li>
      </ul>

      <h3 className="text-lg font-bold mt-4">Information You Provide to Us</h3>

      <p>When you use the Kleo Network Extension, you may give us:</p>

      <ul className="list-disc ml-8">
        <li>
          Browsing history, this includes the title of the page, timestamp, and
          URL.
        </li>
        <li>
          Communication records, such as emails or support tickets, if you reach
          out to us. We primarily use Discord for all our communications.
        </li>
      </ul>

      <h3 className="text-lg font-bold mt-4">
        Automatic Information Collection
      </h3>

      <p>
        When you download, access, and use the Extension, it may use technology
        to collect data automatically, which includes:
      </p>

      <ul className="list-disc ml-8">
        <li>
          For any other purpose, we state when you provide the information.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4">2. How We Use Your Information</h2>

      <p>The information we collect helps us to:</p>

      <ul className="list-disc ml-8">
        <li>
          Deliver and maintain the Extension, as well as any requested services.
        </li>
        <li>Understand and enhance user experience.</li>
        <li>
          Perform our obligations and enforce our rights from any contracts
          between you and us, including for billing.
        </li>
        <li>
          Notify you about changes to our Extension or any services we offer.
        </li>
        <li>Allow participation in interactive features.</li>
        <li>
          Conduct research and analytics to improve the Extension and customer
          experience.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4">
        3. Disclosure of Your Information
      </h2>

      <p>We may share your information as follows:</p>

      <ul className="list-disc ml-8">
        <li>With subsidiaries and affiliates.</li>
        <li>
          With contractors, service providers, and other third parties we use to
          support our business.
        </li>
        <li>For the purpose for which you provided it.</li>
        <li>
          For any other purpose we state when you provide the information.
        </li>
        <li>With your consent.</li>
      </ul>

      <p>We may also disclose your personal information:</p>

      <ul className="list-disc ml-8">
        <li>To comply with legal obligations and law enforcement requests.</li>
        <li>
          To enforce our agreements, including for billing and collection
          purposes.
        </li>
        <li>
          If we believe it's necessary to protect the rights, property, or
          safety of Kleo Network, our users, or the public.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4">4. Data Security</h2>

      <p>
        We implement security measures to safeguard your personal information
        from unauthorized access and misuse. All information you provide is
        stored on secure servers with restricted access.
      </p>

      <p>
        We urge you to take steps to keep your personal information safe,
        especially your password, and to log out of your account after use.
        However, no system can be completely secure, and we cannot guarantee the
        security of your information.
      </p>

      <h2 className="text-xl font-bold mt-4">
        5. Changes to Our Privacy Policy
      </h2>

      <p>
        It is our policy to post any changes we make to our privacy policy on
        this page with a notice that the privacy policy has been updated. If we
        make significant changes to how we treat our users' personal
        information, we will also notify you through a notice in the Extension
        or through an email notification.
      </p>

      <h2 className="text-xl font-bold mt-4">6. Contact Information</h2>

      <p>
        To ask questions or provide feedback regarding this privacy policy and
        our privacy practices, please contact us at,{' '}
        <a href="mailto:aish@kleo.network" className="text-gray-500">
          aish@kleo.network
        </a>
        . You can also reach us on discord,{' '}
        <a
          href="https://discord.gg/Qn6ZmecTEw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500"
        >
          https://discord.gg/Qn6ZmecTEw
        </a>
      </p>

      <p>
        Your use of Kleo Network signifies your consent to this Privacy Policy.
        If you do not agree to this policy, please do not use the Kleo Network
        Extension. Continued use of the Extension following the posting of
        changes to these terms will mean that you accept those changes.
      </p>
    </div>
  )
}

export default PrivacyPolicy
