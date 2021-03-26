import * as React from 'react';
import {Announcement} from "../../../components/Announcement";
import {Link} from "../../../components/Link";

interface Props {

}

export const Announcements = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container p-5 mx-auto flex flex-col">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-10">Announcements</h1>
                    <Announcement date="25.03.2021" announcement="As per information received from Director of Evaluation, JNTUH, all the students of I Year  B.Tech. I semester  courses are informed to note that the II mid term exams as well as laboratory exams have been postponed. The revised dates of these exams will be intimated later. "/>
                    <Announcement date="24.03.2021" announcement="Postponement of ongoing examinations - press release by JNTUH "/>
                    <Announcement date="23.03.2021" announcement="I M.Tech I Sem Regular & Suppli, II Sem Suppli and III Sem  Comprehensive Viva Exam Notification - May 2021"/>
                    <Announcement date="23.03.2021" announcement='National Conference on "Innovations in Civil Engineering through Sustainable Technologies" (NICEST 21) '/>
                    <Announcement date="22.03.2021" announcement="Exam Center Preference Allotment for I B.Tech I Sem Regular-Supply & II Sem Supply April-2021"/>
                    <Link><p>Click here for more</p></Link>
                </div>
            </section>
        </div>
    );
};