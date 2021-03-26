import * as React from 'react';
import {Mission} from "./Mission";
import {Objectives} from "./Objectives";

interface Props {

}

export const About = (props: Props) => {
    return (
        <div>
            <Mission/>
            <Objectives/>
        </div>
    );
};