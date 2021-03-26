import * as React from 'react';
import {CardLink} from "../../../components/CardLink";

interface Props {

}

export const Links = (props: Props) => {
    const [showExtra, setShowExtra] = React.useState(false);
    return (
        <section className="text-gray-600 body-font mb-5">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Useful Links</h1>
                </div>
                <div className="flex flex-wrap -m-2 mb-2">
                    <CardLink text='B-CATEGORY ADMISSIONS : 2020-21'/>
                    <CardLink text='ADMISSIONS'/>
                    <CardLink text='ACADEMIC CALENDAR'/>
                    <CardLink text='ACADEMICS & EXAMINATION SECTION'/>
                    <CardLink text='MANDATORY DISCLOSURE - 2019'/>
                    <CardLink text='FACULTY DETAILS'/>
                    <CardLink text='ACADEMIC REGULATIONS & SYLLABUS'/>
                    <CardLink text='PERFORMANCE APPRAISAL MANUAL'/>
                    <CardLink text='Grievance Redressal Committees'/>
                    <CardLink text='OMBUDSPERSON'/>
                    <CardLink text='Feed Back'/>
                    <CardLink text='NAAC-SSR'/>
                    <CardLink text='COLLEGE ACHIEVEMENTS'/>
                    <CardLink text='STUDENTS ACHIEVEMENTS'/>
                    <CardLink text='APPEAL TO PARENTS'/>
                    <CardLink text='NIRF'/>
                    <CardLink text='TUITION FEE PAYMENT'/>
                    <CardLink text='TRANSPORT FEE PAYMENT'/>
                    <CardLink text='ONLINE EXAM FEE PAYMENT'/>
                    <CardLink text='SCHOLARSHIP SECTION'/>
                </div>
                <div className={showExtra ? "flex flex-wrap -m-2" :  "flex flex-wrap -m-2 hidden"}>
                    <CardLink text='E-GOVERNANCE'/>
                    <CardLink text='PREAMBLE TO THE INDIAN CONSTITUTION'/>
                    <CardLink text='CONTACT US'/>
                    <CardLink text='COVID 19'/>
                    <CardLink text='PLACEMENTS'/>
                    <CardLink text='STUDENTS CORNER'/>
                    <CardLink text='WINNOU LOGIN'/>
                    <CardLink text='WEB e-MAIL'/>
                    <CardLink text='Office 365 e-MAIL'/>
                    <CardLink text='R & D'/>
                    <CardLink text='NISP'/>
                    <CardLink text='LIBRARY'/>
                    <CardLink text='TRANSPORT'/>
                    <CardLink text='BULLETIN BOARD'/>
                    <CardLink text='MGIT IN NEWS'/>
                    <CardLink text='WOMEN DEVELOPMENT COMMITTEE'/>
                    <CardLink text='ANTI RAGGING'/>
                    <CardLink text='NSS UNIT'/>
                    <CardLink text='STUDENT CLUBS'/>
                    <CardLink text='PHOTO GALLERY'/>
                </div>
                <button className="mt-3 text-blue-500 inline-flex items-center mb-5" onClick={_ => setShowExtra(!showExtra)}>
                    <p>{showExtra ? "Show Less" : "Show More"}</p>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                         viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>
    );
};