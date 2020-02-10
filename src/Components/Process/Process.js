import React from "react";
import classes from "./Process.module.css";
import SubHeading from "../SubHeading/SubHeading";
import Heading from "./Heading/Heading";

const process = () => {
    return (
        <div className={classes.Process}>
            <div className={classes.Text}>
                <SubHeading>Services</SubHeading>
                <p className={classes.Intro}>
                    Our team at Weyburn Group has 10+ years of commercial and
                    residential construction experience. We provide excellent
                    work for our clients at a competitive price. Our offered
                    services are categorized as follows: Renovation, Roofing,
                    and Siding.
                </p>

                <Heading> Renovation </Heading>

                <p>
                    We specialize in bathroom, basement, and kitchen
                    remodelling. We also provide full house renovations.
                    Planning and designing of the project will be reviewed by
                    our project managers to ensure that our clients achieve
                    their dream home.
                </p>
                <Heading> Roofing </Heading>
                <p>
                    We operate with a full service roofing team which offers
                    pre-installation roof inspection, waterproofing/ice shield,
                    shingle installation, and roof maintenance. A comprehensive
                    inspection will provide a cost-effective solution to the
                    problems with your roof. We also cover low-cost water
                    leakage repairs, damaged shingle replacements, and caulking
                    touch-ups. Our suppliers offer a variety of shingles ranging
                    from 30-year lifetime architect shingles to 50-year designer
                    shingles.
                </p>
                <Heading> Siding </Heading>
                <p>
                    We offer complete aluminum and vinyl products installation
                    which include downspouts, eavestroughs, fascias, siding, and
                    soffits. We source our products from reliable local
                    manufacturers such as Kaycan and Gentek. All our work comes
                    with a 10 year guarantee which also covers any new windows
                    and doors caulking.
                </p>
            </div>
        </div>
    );
};

export default process;
