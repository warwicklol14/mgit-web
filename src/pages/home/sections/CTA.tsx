import * as React from 'react';
import {InfoCard} from "../../../components/InfoCard";
import NBA_IMAGE from '../../../images/nba.png';
import NACC_IMAGE from '../../../images/nacc.png';
import TOP_IMAGE from '../../../images/top.png';

interface Props {

}

export const CTA = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 pt-10 pb-12 mx-auto">
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <InfoCard image_location={NACC_IMAGE} title="NAAC Accredited" text="MGIT is Accredited by NAAC with 'A' Grade for a period of 5 years with 3.14 CGPA"/>
                        <InfoCard image_location={NBA_IMAGE} title="NBA Accredited" text="UG Programs ECE,EEE,CSE,IT,MMT & MCT are Accredited by NBA in 2009, 2014 ,2018 & 2020."/>
                        <InfoCard image_location={TOP_IMAGE} title="Top Institute in South India" text="MGIT stands among Top 100 in INDIA , Top 50 in South India & Top 2 in TELANGANA. MGIT received MHRDs NIRF-2020 Ranking in the rank band : 201 to 250 "/>
                    </div>
                </div>
            </section>
        </div>
    );
};