/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LegalPage: React.FC = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

    return (
        <div className="min-h-screen bg-[#F9F8F4] text-stone-800">
            {/* Header */}
            <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Home</span>
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="container mx-auto px-6 py-16 max-w-5xl">
                <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="border-b border-stone-200 bg-[#F9F8F4]">
                        <div className="flex">
                            <button
                                onClick={() => setActiveTab('privacy')}
                                className={`flex-1 px-8 py-4 font-serif text-lg font-semibold transition-all ${activeTab === 'privacy'
                                        ? 'bg-white text-stone-900 border-b-2 border-nobel-gold'
                                        : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
                                    }`}
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => setActiveTab('terms')}
                                className={`flex-1 px-8 py-4 font-serif text-lg font-semibold transition-all ${activeTab === 'terms'
                                        ? 'bg-white text-stone-900 border-b-2 border-nobel-gold'
                                        : 'text-stone-600 hover:text-stone-900 hover:bg-white/50'
                                    }`}
                            >
                                Terms of Service
                            </button>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="p-8 md:p-12">
                        {activeTab === 'privacy' ? (
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Privacy Policy</h1>
                                <p className="text-sm text-stone-500 mb-8">Last updated: December 14, 2025</p>
                                <div className="w-16 h-1 bg-nobel-gold mb-12"></div>

                                <div className="prose prose-stone max-w-none space-y-8">
                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">1. Introduction</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            Welcome to Indx AI ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">2. Information We Collect</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            We collect information that you provide directly to us, including:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li><strong>Personal Information:</strong> Name, email address, company name, and other contact details you provide when you register, contact us, or use our services.</li>
                                            <li><strong>Account Information:</strong> Username, password, and preferences associated with your account.</li>
                                            <li><strong>Usage Data:</strong> Information about how you interact with our services, including queries, model interactions, and feature usage.</li>
                                            <li><strong>Technical Data:</strong> IP address, browser type, device information, and analytics data collected through cookies and similar technologies.</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">3. How We Use Your Information</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            We use the information we collect to:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li>Provide, maintain, and improve our AI services and platform</li>
                                            <li>Process your requests and transactions</li>
                                            <li>Send you technical notices, updates, and support messages</li>
                                            <li>Respond to your inquiries and provide customer support</li>
                                            <li>Analyze usage patterns to enhance user experience</li>
                                            <li>Detect, prevent, and address technical issues and security threats</li>
                                            <li>Comply with legal obligations and enforce our terms</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">4. Data Storage and Security</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Your data is encrypted in transit and at rest. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">5. Data Sharing and Disclosure</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            We do not sell your personal information. We may share your information only in the following circumstances:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., hosting, analytics)</li>
                                            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                                            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                                            <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">6. Cookies and Tracking Technologies</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            We use cookies and similar tracking technologies to collect usage information and improve our services. You can control cookie preferences through your browser settings. Note that disabling cookies may affect the functionality of our services.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">7. Your Privacy Rights</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            Depending on your location, you may have the following rights:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li><strong>Access:</strong> Request access to your personal information</li>
                                            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                                            <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                                            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                                        </ul>
                                        <p className="text-stone-600 leading-relaxed mt-4">
                                            To exercise these rights, please contact us at <a href="mailto:privacy@indxai.tech" className="text-nobel-gold hover:underline">privacy@indxai.tech</a>.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">8. International Data Transfers</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">9. Children's Privacy</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">10. Changes to This Privacy Policy</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">11. Contact Us</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                                        </p>
                                        <div className="mt-4 p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg">
                                            <p className="text-stone-800 font-medium">Indx AI Inc.</p>
                                            <p className="text-stone-600">Email: <a href="mailto:privacy@indxai.tech" className="text-nobel-gold hover:underline">privacy@indxai.tech</a></p>
                                            <p className="text-stone-600">General Inquiries: <a href="mailto:contact@indxai.tech" className="text-nobel-gold hover:underline">contact@indxai.tech</a></p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Terms of Service</h1>
                                <p className="text-sm text-stone-500 mb-8">Last updated: December 14, 2025</p>
                                <div className="w-16 h-1 bg-nobel-gold mb-12"></div>

                                <div className="prose prose-stone max-w-none space-y-8">
                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">1. Agreement to Terms</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            By accessing or using Indx AI's services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services. These Terms apply to all users, including visitors, registered users, and enterprise customers.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">2. Description of Services</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            Indx AI provides artificial intelligence services utilizing Pseudo-Inverse algorithms for analytical learning, instant adaptation, and zero-shot accuracy. Our services include but are not limited to AI models, API access, and related tools and documentation. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">3. User Accounts</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            To access certain features, you must create an account. You agree to:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li>Provide accurate, current, and complete information during registration</li>
                                            <li>Maintain and promptly update your account information</li>
                                            <li>Maintain the security of your password and account credentials</li>
                                            <li>Accept responsibility for all activities that occur under your account</li>
                                            <li>Notify us immediately of any unauthorized access or security breach</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">4. Acceptable Use Policy</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            You agree not to use our services to:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li>Violate any applicable laws, regulations, or third-party rights</li>
                                            <li>Distribute malware, viruses, or other harmful code</li>
                                            <li>Engage in fraudulent, deceptive, or misleading activities</li>
                                            <li>Harass, abuse, or harm others</li>
                                            <li>Attempt to gain unauthorized access to our systems or networks</li>
                                            <li>Reverse engineer, decompile, or disassemble our services</li>
                                            <li>Use our services for any illegal or unauthorized purpose</li>
                                            <li>Interfere with or disrupt the integrity or performance of our services</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">5. Intellectual Property Rights</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and algorithms, are owned by Indx AI and are protected by international copyright, trademark, and other intellectual property laws.
                                        </p>
                                        <p className="text-stone-600 leading-relaxed">
                                            You retain ownership of any data or content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and process such content solely to provide and improve our services.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">6. Payment and Subscription Terms</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            For paid services:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li>You agree to pay all fees associated with your subscription or usage</li>
                                            <li>Fees are non-refundable except as required by law or as explicitly stated</li>
                                            <li>We reserve the right to change our pricing with 30 days' notice</li>
                                            <li>Failure to pay may result in suspension or termination of services</li>
                                            <li>All payments are processed securely through third-party payment processors</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">7. Service Level and Availability</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            While we strive to provide reliable and continuous service, we do not guarantee that our services will be uninterrupted, error-free, or completely secure. We reserve the right to perform maintenance, updates, and modifications that may temporarily affect service availability.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">8. Limitation of Liability</h2>
                                        <p className="text-stone-600 leading-relaxed mb-4">
                                            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                                        </p>
                                        <ul className="list-disc list-inside text-stone-600 space-y-2 ml-4">
                                            <li>Indx AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                                            <li>Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim</li>
                                            <li>We are not responsible for any loss of data, profits, or business opportunities</li>
                                            <li>These limitations apply regardless of the legal theory of liability</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">9. Disclaimer of Warranties</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that our services will meet your requirements or that they will be error-free.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">10. Indemnification</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            You agree to indemnify, defend, and hold harmless Indx AI and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">11. Termination</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use our services will cease immediately. Provisions that by their nature should survive termination shall survive, including ownership, warranty disclaimers, and limitations of liability.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">12. Dispute Resolution</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            Any disputes arising from these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You agree to waive any right to a jury trial or to participate in a class action lawsuit.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">13. Governing Law</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">14. Changes to Terms</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through our services. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                                        </p>
                                    </section>

                                    <section>
                                        <h2 className="font-serif text-2xl font-semibold text-stone-900 mb-4">15. Contact Information</h2>
                                        <p className="text-stone-600 leading-relaxed">
                                            For questions about these Terms, please contact us at:
                                        </p>
                                        <div className="mt-4 p-6 bg-[#F9F8F4] border border-stone-200 rounded-lg">
                                            <p className="text-stone-800 font-medium">Indx AI Inc.</p>
                                            <p className="text-stone-600">Email: <a href="mailto:legal@indxai.tech" className="text-nobel-gold hover:underline">legal@indxai.tech</a></p>
                                            <p className="text-stone-600">General Inquiries: <a href="mailto:contact@indxai.tech" className="text-nobel-gold hover:underline">contact@indxai.tech</a></p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-stone-900 text-stone-400 py-8 mt-16">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm">© 2025 Indx AI Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LegalPage;
