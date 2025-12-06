import { BUSINESS_EMAIL } from "../../constants";

const effectiveDate = "December 6, 2025";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 py-6 px-4">
            <div className="max-w-[1280px] mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-semibold leading-tight">Terms & Conditions</h1>
                    <p className="mt-2 text-sm text-gray-600">Effective date: {effectiveDate}</p>
                </header>

                <section className="prose prose-lg max-w-none mb-6">
                    <p>
                        Welcome to <strong>Sri Ganesh Auto Cars</strong>. These Terms and Conditions govern
                        your use of our website and services. By accessing or using this website, you agree to
                        comply with and be bound by these Terms. If you do not agree with any part of these
                        Terms, please discontinue use of the site.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">1. Website Purpose</h2>
                    <p className="text-sm text-gray-700">
                        This website is designed to allow users to browse and view information about
                        pre-owned cars available for sale at Sri Ganesh Auto Cars. No login or registration is
                        required. The site provides details such as car specifications, pricing, images,
                        dealership location, and contact information.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">2. Acceptance of Terms</h2>
                    <p className="text-sm text-gray-700">
                        By viewing or using this website, you acknowledge that you have read, understood, and
                        agree to be bound by these Terms. We may update these Terms from time to time without
                        prior notice. Continued use of the website constitutes acceptance of the updated Terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">3. Accuracy of Information</h2>
                    <div className="text-sm text-gray-700 space-y-3">
                        <p>
                            We strive to keep car information, prices, features, and availability accurate and
                            up to date. However, errors, delays, or omissions may occur. Vehicle availability can
                            change at any time without notice.
                        </p>
                        <p>
                            Sri Ganesh Auto Cars does not guarantee that all information presented on the
                            website is entirely accurate or current. If you are interested in a vehicle, we
                            recommend contacting us directly to confirm details before making any decision.
                        </p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">4. Use of Website</h2>
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                        <li>You may use this site solely for viewing vehicle listings and dealership details.</li>
                        <li>Unauthorized attempts to access secure areas or server systems are prohibited.</li>
                        <li>You must not use the website for fraudulent, harmful, or illegal activities.</li>
                        <li>
                            Automated scraping, data extraction, or copying vehicle listings without permission is
                            not allowed.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">5. Intellectual Property</h2>
                    <p className="text-sm text-gray-700">
                        All content on this website — including text, images, logos, car descriptions, and
                        layout — is the property of Sri Ganesh Auto Cars unless stated otherwise. Unauthorized
                        reproduction, copying, or redistribution of content is strictly prohibited.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">6. Third-Party Services & Links</h2>
                    <p className="text-sm text-gray-700">
                        Our website may display links to third-party services such as map embeds, review
                        platforms, or external car data sites. These external websites have their own terms and
                        policies, and Sri Ganesh Auto Cars is not responsible for their content, accuracy, or
                        privacy practices. We encourage you to review their terms before use.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">7. Limitation of Liability</h2>
                    <div className="text-sm text-gray-700 space-y-3">
                        <p>
                            We are committed to keeping the website functional and secure. However, we do not
                            guarantee uninterrupted access or error-free operation. Technical issues, maintenance,
                            or outages may occur.
                        </p>
                        <p>
                            Sri Ganesh Auto Cars is not liable for any indirect, incidental, or consequential
                            damages arising from your use of the website, including but not limited to loss of
                            data, loss of opportunity, browsing errors, or outdated information.
                        </p>
                        <p>
                            Any decisions made based on the information available on this site are done at your
                            own discretion.
                        </p>
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">8. Availability of Vehicles</h2>
                    <p className="text-sm text-gray-700">
                        Vehicle listings are for informational purposes only. Availability may change without
                        notice and is confirmed only after contacting us directly. Prices, features, and
                        mileage may vary depending on final inspection and verification.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">9. Test Drives & In-Person Visits</h2>
                    <p className="text-sm text-gray-700">
                        Users interested in purchasing a vehicle are encouraged to visit our dealership for
                        physical inspection and test drives. Website images may not always represent current
                        condition, color accuracy, or exact specifications.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">10. Privacy Policy Reference</h2>
                    <p className="text-sm text-gray-700">
                        Your use of the website is also governed by our Privacy Policy, which outlines the
                        collection and use of browsing data. Please review the Privacy Policy for full details.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">11. Changes to These Terms</h2>
                    <p className="text-sm text-gray-700">
                        We may revise or update these Terms at any time. The revised version will be posted on
                        this page with an updated effective date. Continued website use means you accept the
                        revised Terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-medium mb-2">12. Contact Us</h2>
                    <p className="text-sm text-gray-700">If you have any questions about these Terms, please contact:</p>
                    <div className="mt-3 text-sm text-gray-700">
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href={`mailto:${BUSINESS_EMAIL}`} className="text-blue-600 underline">
                                {BUSINESS_EMAIL}
                            </a>
                        </p>
                        <p className="mt-1">
                            <strong>Address:</strong> NH 66, Near Abharana Motors, NGO Colony, Puttur PO 576105, Udupi, Karnataka.
                        </p>
                    </div>
                </section>

                <footer className="mt-8 text-xs text-gray-500">
                    <p>
                        These Terms & Conditions apply only to the content and services offered on this Sri
                        Ganesh Auto Cars website.
                    </p>
                </footer>
            </div>
        </div>
    );
}

export default TermsAndConditions