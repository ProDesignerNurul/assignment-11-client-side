import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/UserContext';
import useTitle from '../../hooks/useTitle';

const About = () => {

    useTitle('About')
    

    return (
        <div className='lg:w-6/12 mx-auto text-justify'>
            <h2 className='text-6xl mb-5'>A systematic literature review of ride-sharing platforms, user factors and barriers</h2>
            <p className='mb-10'>Ride-sharing is an innovative on-demand transport service that aims to promote sustainable transport, reduce car utilization, increase vehicle occupancy and public transport ridership. By reviewing ride-sharing studies around the world, this paper aims to map major aspects of ride-sharing, including online platforms, user factors and barriers that affect ride-sharing services, and extract useful insights regarding their successful implementation. 
                <br /> <br />
                A systematic literature review is conducted on scientific publications in English language. Articles are eligible if they report a study on user factors affecting ride-sharing use and/or barriers preventing ride-sharing implementation; ride-sharing online platforms in these articles are also recorded and are further explored through their official websites. A database is built that organizes articles per author, year and location, summarizes online platform attributes, and groups user factors associated with the likelihood to ride-share.
                <br /> <br />
                The review shows that the term “ride-sharing” is used in the literature for both profit and non-profit ride-sharing services. In total, twenty-nine ride-sharing online platforms are recorded and analyzed according to specific characteristics. Sixteen user factors related to the likelihood to ride-share are recorded and grouped into sociodemographic, location and system factors. While location and system factors are found to follow a pattern among studies, mixed findings are recorded on the relationship between sociodemographic factors and ride-sharing. Factors that may hinder the development of ride-sharing systems are grouped into economic, technological, business, behavioral and regulatory barriers.
                <br /> <br />
                Opportunities exist to improve the quality of existing ride-sharing services and plan successful new ones. Future research efforts should focus towards studying ride-sharing users' trip purpose (i.e., work, university, shopping, etc.), investigating factors associated to ride-sharing before and after implementation of the service, and perform cross-case studies between cities and countries of the same continent to compare findings.
            </p>
        </div>
    );
};

export default About;