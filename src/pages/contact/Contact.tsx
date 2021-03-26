import * as React from 'react';
import {Map} from "./sections/Map";
import {ContactForm} from "./sections/ContactForm";

interface Props {

}

export const Contact = (props: Props) => {
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <Map/>
                    <ContactForm/>
                </div>
            </section>
        </div>
    );
};