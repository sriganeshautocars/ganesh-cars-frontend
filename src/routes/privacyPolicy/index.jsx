import { useEffect } from "react";
import { BUSINESS_EMAIL } from "../../constants";

const effectiveDate = "December 6, 2025";

const PrivacyPolicy = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-6">
            <div className="max-w-[1280px] mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-semibold leading-tight">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-gray-600">Effective date: {effectiveDate}</p>
                </header>

                <section className="prose prose-lg max-w-none mb-6">
                    <p>
                        Welcome to <strong>Sri Ganesh Auto Cars</strong>. This Privacy Policy explains how we collect,
                        use, disclose, and protect information when you visit our website to browse and view
                        pre-owned car listings. You are not required to create an account or log in to view the
                        site — this policy covers information that may be collected automatically while you
                        browse.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">1. Information We Collect</h2>
                    <div className="space-y-3 text-sm text-gray-700">
                        <p>
                            <strong>Automatically Collected Information:</strong> When you visit our website, we may
                            automatically collect certain information about your device and how you interact with
                            the site. This includes your IP address, browser type and version, operating system,
                            device identifiers, pages visited, time spent on pages, referring/exit pages, and
                            clickstream data. This information helps us understand traffic and improve the site.
                        </p>

                        <p>
                            <strong>Cookies & Tracking Technologies:</strong> We use cookies and similar
                            technologies (like local storage and web beacons) to provide site functionality,
                            remember preferences, and analyze site usage. Cookies are small text files placed on
                            your device. You can control or disable cookies through your browser settings —
                            however, disabling cookies may affect certain features of the site.
                        </p>

                        <p>
                            <strong>Third-Party Analytics:</strong> We may use third-party analytics services
                            (for example, Google Analytics) to better understand how visitors find and use our
                            site. These services collect and process information as described above and provide
                            aggregated reports to us. These third parties have their own privacy policies.
                        </p>

                        <p>
                            <strong>Contact Information (Optional):</strong> If you choose to contact us via a
                            contact form, email, phone, or messaging, we will collect the information you provide
                            (name, email address, phone number, message) in order to respond. Since the site does
                            not require registration, this information is only collected if you contact us.
                        </p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">2. How We Use Information</h2>
                    <p className="text-sm text-gray-700">
                        We use collected information for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-2">
                        <li>Provide, maintain, and improve website content and functionality.</li>
                        <li>Analyze site traffic and usage patterns to improve user experience.</li>
                        <li>Respond to inquiries and communicate with you when you contact us.</li>
                        <li>Detect, prevent, and address technical issues and security incidents.</li>
                        <li>Comply with legal obligations if required by law.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">3. Sharing & Disclosure</h2>
                    <p className="text-sm text-gray-700">
                        We do not sell your personal information. We may share information in the following
                        limited circumstances:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-2">
                        <li>
                            <strong>Service providers:</strong> We may share data with trusted third-party
                            providers who perform services on our behalf (such as analytics providers, hosting
                            platforms, and email service providers). These providers are authorized to use your
                            information only as necessary to provide the services to us.
                        </li>
                        <li>
                            <strong>Legal requests:</strong> If required by law, regulation, or legal process, we
                            may disclose information to comply with a subpoena, court order, or other legal
                            request or to protect our rights, property, or safety or those of others.
                        </li>
                        <li>
                            <strong>Business transfers:</strong> In the event of a sale, merger, reorganization, or
                            other corporate transaction, user information may be transferred to the successor
                            entity — with notice to affected users when required by law.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">4. Third-Party Links & Embedded Content</h2>
                    <p className="text-sm text-gray-700">
                        Our site may contain links to third-party websites (for example, partner listings,
                        review platforms, or embedded maps). These sites have their own privacy practices, and
                        we are not responsible for their content or policies. Please review the privacy
                        statements of any third-party sites you visit.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">5. Cookies & Your Choices</h2>
                    <p className="text-sm text-gray-700">
                        Most browsers accept cookies by default. You can choose to block cookies or delete
                        cookies via your browser settings. Opting out of certain cookies may reduce the
                        functionality of the site. To opt out of analytics tracking specifically, follow the
                        instructions provided by the analytics provider (such as Google Analytics) for opt-out
                        tools and browser add-ons.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">6. Security</h2>
                    <p className="text-sm text-gray-700">
                        We take reasonable measures to protect information collected on our site. These
                        measures include administrative, technical, and organizational safeguards designed to
                        protect against unauthorized access, disclosure, alteration, and destruction. However,
                        no method of transmission over the internet or electronic storage is 100% secure, and
                        we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">7. Data Retention</h2>
                    <p className="text-sm text-gray-700">
                        We retain personal information only for as long as necessary to fulfill the purposes
                        outlined in this policy, unless a longer retention period is required or permitted by
                        law. Automatically collected analytics data may be kept in aggregated or anonymized
                        form for longer-term analysis.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">8. Children's Privacy</h2>
                    <p className="text-sm text-gray-700">
                        Our website is intended for a general audience and is not directed to children under
                        the age of 13. We do not knowingly collect personal information from children under 13.
                        If you believe a child under 13 has provided us with personal data, please contact us
                        and we will take steps to delete such information.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">9. International Visitors</h2>
                    <p className="text-sm text-gray-700">
                        If you access our website from outside India, please note that information we collect
                        may be transferred to, stored, and processed in India or other countries. By using the
                        site, you consent to the transfer and processing of information in accordance with this
                        policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">10. Your Rights</h2>
                    <p className="text-sm text-gray-700">
                        Depending on your jurisdiction, you may have rights related to your personal data,
                        including the right to access, correct, delete, or restrict processing. If you would
                        like to exercise any of these rights, please contact us using the details below and
                        we will respond in accordance with applicable law.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">11. Changes to This Policy</h2>
                    <p className="text-sm text-gray-700">
                        We may update this Privacy Policy from time to time. When we make material changes, we
                        will update the "Effective date" at the top of this page. Your continued use of the
                        website after changes are posted constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">12. Contact Us</h2>
                    <p className="text-sm text-gray-700">
                        If you have questions about this Privacy Policy or wish to exercise your data rights,
                        please contact:
                    </p>
                    <div className="mt-3 text-sm text-gray-700">
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${BUSINESS_EMAIL}`} className="text-blue-600 underline">
                                {BUSINESS_EMAIL}
                            </a>
                        </p>
                        <p className="mt-1">
                            <strong>Address:</strong> NH 66, Near Abharana Motors, NGO Colony, Puttur PO 576105,
                            Udupi, Karnataka.
                        </p>
                    </div>
                </section>

                <footer className="mt-8 text-xs text-gray-500">
                    <p>
                        This Privacy Policy applies only to information collected by Sri Ganesh Auto Cars on
                        this website and does not apply to information collected offline or through other
                        channels.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default PrivacyPolicy
