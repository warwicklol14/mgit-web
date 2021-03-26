import * as React from 'react';
import {Announcements} from "./sections/Announcements";
import {Header} from "./sections/Header";
import {CTA} from "./sections/CTA";
import {Links} from "./sections/Links";

interface Props {

}

export const Home = (props: Props) => {
    return (
        <div>
            <CTA/>
            <Announcements/>
            <Links/>
        </div>
    );
};