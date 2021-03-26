import * as React from 'react';
import {Objective} from "../../components/Objective";

interface Props {

}

export const Objectives = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Objectives</h1>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <Objective text='Impart up-to-date knowledge in the students chosen fields to make them quality engineers'/>
                        <Objective text='To improve teaching & learning process through continuous assessment.'/>
                        <Objective text='Impart up-to-date knowledge in the students chosen fields to make them quality engineers'/>
                        <Objective text='Make the students experience the applications on quality equipment and tools'/>
                        <Objective text='Provide quality environment and services to all stakeholders'/>
                        <Objective text='Provide systems, resources and opportunities for continuous improvement'/>
                        <Objective text='Maintain global standards in education, training and services'/>
                        <Objective text='To achieve campus automation for better control, coordination and monitoring.'/>
                        <Objective text='To equip the teachers with the latest computing facilities along with modern teaching aids.'/>
                        <Objective text='To improve teaching & learning process through continuous assessment.'/>
                        <Objective text='To enroll and nurture meritorious students.'/>
                        <Objective text='To promote Research & Consultancy.'/>
                        <Objective text='To improve the Industry Institute interaction towards achieving the Institutes Vision & Mission.'/>
                        <Objective text='Continuous up-gradation & development of infrastructural facilities'/>
                        <Objective text='To establish "Finishing Schools" to help the weak/rural students to improve their employable skills and personality development.'/>
                    </div>
                </div>
            </section>
        </div>
    );
};