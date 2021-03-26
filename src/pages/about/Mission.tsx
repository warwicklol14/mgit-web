import * as React from 'react';

interface Props {

}

export const Mission = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div
                                className="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                         stroke-linejoin="round" stroke-width="2" className="w-8 h-8"
                                         viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow mb-6">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Vision</h2>
                                    <p className="leading-relaxed text-base">MGIT envisions, inspires and motivates its students to imbibe knowledge with which they can excel and serve the nation with great elan.
                                        To nurture students into disciplined young citizens of irreproachable character,
                                        coupled with hands-on training and to make them readily employable by fostering social, cultural and environmental consciousness. </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full">
                            <div
                                className="flex border-2 rounded-lg border-gray-300 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div
                                    className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                         stroke-linejoin="round" stroke-width="2" className="w-10 h-10"
                                         viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Mission</h2>
                                    <p className="leading-relaxed text-base">The Mission of MGIT is to strive towards the development and dissemination of knowledge in many diversified academic and professional fields.
                                        It aims to reach the pinnacle of technical excellence while pursuing quality improvement continuously. Also, its mission is to train manpower with a capacity to take-up policy formulation and decision making responsibilities in terms of resource management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};