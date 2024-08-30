import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                General Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy policy
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Cookie Policy
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Refund Policy
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">General Terms of Use</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                {" "}
                By accessing or using the Clickshelter App, you agree to be
                bound by these General Terms of Use ("Terms"). These Terms
                constitute a legally binding agreement between you, the user
                (either as a tenant or landlord), and Micheast Limited (the
                Company).
                <br /> Your use of the App is also subject to our Privacy
                Policy, which explains how we collect, use, and protect your
                personal information. By agreeing to these Terms, you also agree
                to our Privacy Policy.
                <br />
                <br />
                Tenant Responsibilities:
                <br />
                As a tenant, you agree to provide accurate, complete, and
                up-to-date information when submitting a rental request. You
                understand that any false or misleading information provided may
                result in the termination of your account and potential legal
                action.
                <br />
                <br />
                Landlord Responsibilities:
                <br />
                As a landlord, you agree to comply with all applicable laws and
                regulations related to renting out your property, including but
                not limited to health and safety standards, licensing, and tax
                obligations. You agree to provide truthful, accurate, and
                up-to-date information about your property.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We reserve the right to modify, update, or change these Terms at
                any time. If we make significant changes, we will notify you by
                email or through the App. Your continued use of the App after
                any such changes signifies your acceptance of the updated Terms.
                It is your responsibility to review these Terms periodically. If
                you do not agree to the modified Terms, you should discontinue
                using the App immediately.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Eligibility:
                <br />
                The App is available to individuals who are at least 18 years
                old or the age of majority in their jurisdiction. By using the
                App, you represent and warrant that you meet this eligibility
                requirement.
                <br />
                <br />
                Account Registration:
                <br />
                To use certain features of the App, such as submitting a rental
                request or listing a property, you must create an account. You
                agree to provide accurate, current, and complete information
                during the registration process and to update such information
                as needed. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account.
                <br />
                <br />
                Acceptable Use:
                <br />
                You agree to use the App solely for its intended purpose as
                described in these Terms. You agree not to use the App in any
                way that violates applicable laws or regulations, including but
                not limited to anti-discrimination laws, privacy laws, and
                housing regulations in the UK and Canada. You agree not to
                engage in any activity that interferes with or disrupts the App
                or the servers and networks connected to it.
                <br />
                <br />
                Prohibited Conduct:
                <br />
                You must not use the App to post or transmit any unlawful,
                harmful, threatening, abusive, defamatory, obscene, or otherwise
                objectionable content. You must not impersonate any person or
                entity or misrepresent your affiliation with a person or entity
                when using the App.
                <br />
                <br />
                Termination:
                <br />
                We reserve the right to suspend or terminate your access to the
                App at our discretion, without notice, if you violate these
                Terms or engage in any conduct that we deem inappropriate or
                harmful to the App, other users, or third parties.
              </p>
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Privacy policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using the Clickshelter App, you consent to the collection,
                use, and disclosure of your personal information as described in
                this Privacy Policy. This Privacy Policy explains how
                Clickshelter [Micheast Limited] collects, uses, shares, and
                protects the personal information of users (tenants and
                landlords) in the United Kingdom and Canada. Your use of the App
                is also governed by our General Terms of Use. By agreeing to
                this Privacy Policy, you also agree to the General Terms of Use.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Privacy Policy
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technologies, or legal requirements.
                When we make significant changes, we will notify you by email or
                through the App. Your continued use of the App after any changes
                indicates your acceptance of the updated Privacy Policy.
                <br />
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we are protecting your personal
                information. If you do not agree with any changes, you should
                discontinue using the App immediately.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of Personal Information
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                <b>Information We Collect:</b>
                <br />
                Personal Information: When you create an account or use our
                services, we may collect personal information such as your name,
                email address, phone number, mailing address, payment
                information, and identification documents.
                <br />
                <br />
                Accommodation Details: We collect details about the type of
                accommodation you are seeking or offering, including location,
                rental period, and the number of occupants.
                <br /> <br />
                Usage Data: We may collect information about your interactions
                with the App, including IP addresses, device information,
                browser type, operating system, and pages visited.
                <br /> <br />
                Communications: We collect and store any communications you have
                with us or with other users through the App, including emails,
                messages, and feedback.
                <br />
                <br />
                <b> How We Use Your Information:</b>
                <br />
                To Provide Services: We use your personal information to
                facilitate the rental process, including matching tenants with
                landlords, processing payments, and managing your account.
                <br /> <br />
                To Improve the App: We may use your information to enhance and
                improve our services, analyze user behavior, and develop new
                features.
                <br /> <br />
                To Communicate with You: We may send you notifications, updates,
                and promotional materials related to our services. You can opt
                out of marketing communications at any time.
                <br /> <br />
                To Ensure Compliance: We use your information to enforce our
                Terms of Use, prevent fraud, and comply with legal obligations
                in the UK and Canada.
                <br /> <br />
                <b>Sharing Your Information:</b>
                <br />
                With Landlords/Tenants: We share relevant personal information
                between tenants and landlords to facilitate the rental process.
                <br /> <br />
                With Service Providers: We may share your information with
                third-party service providers who assist us in operating the
                App, processing payments, and providing customer support. These
                providers are required to protect your information and use it
                only for the purposes specified by us.
                <br /> <br />
                For Legal Reasons: We may disclose your information if required
                by law, court order, or regulatory authority, or if we believe
                such disclosure is necessary to protect our rights, the safety
                of our users, or the public.
                <br /> <br />
                <b>Data Security:</b>
                <br />
                We implement reasonable administrative, technical, and physical
                safeguards to protect your personal information from
                unauthorized access, use, disclosure, or destruction. However,
                no data transmission over the internet or storage system can be
                guaranteed to be 100% secure.
                <br /> <br />
                <b>Data Retention:</b>
                <br />
                We retain your personal information for as long as necessary to
                fulfill the purposes for which it was collected, comply with
                legal obligations, resolve disputes, and enforce our agreements.
                When your information is no longer needed, we will securely
                delete or anonymize it.
                <br /> <br />
                <b> Your Rights:</b>
                <br />
                Access and Correction: You have the right to access and correct
                your personal information held by us. You can update your
                account information directly through the App or by contacting
                us.
                <br /> <br />
                Data Portability: In certain circumstances, you have the right
                to request a copy of your personal information in a structured,
                commonly used, and machine-readable format.
                <br /> <br />
                Right to Withdraw Consent: If you have provided consent for the
                collection, use, or sharing of your personal information, you
                have the right to withdraw that consent at any time. This may
                affect your ability to use certain features of the App.
                <br /> <br />
                Complaints: If you believe your privacy rights have been
                violated, you have the right to file a complaint with the
                appropriate regulatory authority in the UK or Canada.
                <br /> <br />
                <b>International Transfers:</b>
                <br />
                Your personal information may be transferred to and stored on
                servers located outside your country of residence, including in
                jurisdictions that may not have the same data protection laws as
                your country. We take steps to ensure that your information
                receives an adequate level of protection in the countries where
                it is processed.
              </p>
            </div>
          </TabPanel>
          {/* End  Privacy policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Cookie Policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using the Clickshelter App, you agree to our use of cookies
                and similar technologies as described in this Cookie Policy.
                This policy explains how Clickshelter [Micheast Limited] uses
                cookies to improve your experience and provide our services.
                <br />
                <br />
                Your use of the App is also governed by our Privacy Policy and
                General Terms of Use. By agreeing to this Cookie Policy, you
                also agree to the other policies mentioned.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Cookie Policy
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or legal requirements. Any significant
                changes will be communicated to you through the App or via
                email. Your continued use of the App after any changes indicates
                your acceptance of the updated Cookie Policy.
                <br />
                We encourage you to review this Cookie Policy periodically. If
                you do not agree with any changes, you should disable cookies in
                your browser or discontinue using the App.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of Cookies
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                <b>What Are Cookies?</b>
                <br />
                Cookies are small text files that are placed on your device by
                websites you visit. They help us understand how you use the App
                and enable us to provide a better user experience.
                <br /> <br />
                <b>Types of Cookies We Use:</b>
                <br />
                Essential Cookies: These cookies are necessary for the operation
                of the App and enable you to use its features, such as accessing
                secure areas. Without these cookies, some parts of the App may
                not function properly. Performance Cookies: These cookies
                collect information about how you use the App, such as which
                pages you visit most often. This information helps us improve
                the App's performance. Functionality Cookies: These cookies
                allow the App to remember choices you make, such as your
                language preferences, to provide a more personalized experience.
                Targeting Cookies: These cookies are used to deliver relevant
                advertisements to you based on your interests. They also help
                limit the number of times you see an ad and measure the
                effectiveness of advertising campaigns.
                <br /> <br />
                <b>Managing Cookies:</b>
                <br />
                Most web browsers automatically accept cookies, but you can
                usually modify your browser settings to decline cookies if you
                prefer. However, disabling cookies may limit your ability to use
                certain features of the App. To manage your cookie preferences
                or to opt-out of certain types of cookies, you can access your
                browser settings.
                <br /> <br />
                <b>Third-Party Cookies:</b>
                <br />
                We may use third-party service providers that place cookies on
                your device to assist us in providing our services, analyzing
                usage, and delivering advertisements. These third-party cookies
                are subject to the privacy policies of the respective providers.
                <br /> <br />
                <b>Data Retention:</b>
                <br />
                Cookies have varying lifespans. Some are deleted when you close
                your browser, while others remain on your device until they
                expire or you delete them. We retain cookie data only for as
                long as necessary for the purposes described in this policy.
              </p>
            </div>
          </TabPanel>
          {/* End  Cookie Policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Refund Policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using the Clickshelter App, you agree to the terms of this
                Refund Policy. This policy outlines the circumstances under
                which refunds on any payments you have made, including rental
                deposit are issued and how you can request one. Micheast Limited
                aims to provide clear and fair guidelines for refunds related to
                services offered through the App.
                <br />
                This Refund Policy is part of our General Terms of Use and
                Privacy Policy. By agreeing to this Refund Policy, you also
                agree to those policies.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Refund Policy
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We may update this Refund Policy periodically to reflect changes
                in our services or legal requirements. If significant changes
                are made, we will notify you through the App or via email.
                Continued use of the App after any changes indicates your
                acceptance of the updated Refund Policy.
                <br />
                <br />
                Please review this policy regularly. If you do not agree with
                the changes, you should stop using the App and contact us
                regarding any outstanding payments or issues.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of Refunds
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                <b>Eligibility for Refunds:</b>
                <br />
                Service Non-Delivery: If we are unable to deliver the service
                you requested (e.g., a failure to connect you with a suitable
                landlord or tenant), you may be eligible for a full or partial
                refund of any money paid as stated in your contract.
                <br />
                <br />
                Service Cancellation: If you cancel a service before it is fully
                provided, you may be eligible for a refund based on the extent
                of the services already delivered.
                <br />
                <br />
                Technical Issues: If technical issues prevent you from accessing
                or using the service, and we are unable to resolve the problem,
                you may be eligible for a refund.
                <br />
                <br />
                <b>Non-Refundable Situations:</b>
                <br />
                Change of Mind: Refunds are not provided if you change your mind
                after the service has been delivered or after the rental
                agreement has been finalized.
                <br />
                <br />
                Non-Compliance: If your account is terminated due to a breach of
                our Terms of Use, you will not be eligible for a refund.
                <br />
                <br />
                Partial Use: If you have partially used the service, refunds may
                be issued at our discretion and may only be partial, reflecting
                the portion of the service not used.
                <br />
                <br />
                <b>How to Request a Refund:</b>
                <br />
                Contact Support: To request a refund, contact our customer
                support team at hello@clickshelter.com/ +447392539244 within 5
                days of the issue arising. Provide your account details, the
                nature of the problem, and any supporting documentation.
                <br />
                <br />
                Review Process: We will review your request within 10 business
                days and notify you of our decision. If approved, refunds will
                be processed within 5 days through the original payment method.
                <br />
                <br />
                <b>Refund Processing:</b>
                <br />
                Method of Refund: Refunds will be issued using the original
                payment method. If that method is unavailable, an alternative
                method will be arranged.
                <br />
                <br />
                Processing Time: Refunds typically take 5 days to process.
                Delays may occur due to banking processes or other external
                factors beyond our control.
              </p>
            </div>
          </TabPanel>
          {/* End  Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;
