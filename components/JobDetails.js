import JobEventTimeline from "./JobEventTimeline";
import Image from "next/image";
import {useState} from "react";
import {DownCircleOutlined, UpCircleOutlined} from "@ant-design/icons";

const JobDetails = ({job}) => {
    const [showTimeline, setShowTimeline] = useState(false);
    const {companyImage, postedBy, title, salary, location, applied, recommended, status} = job;
    return(
        <div className="job">
            <div className="jobDetails">
                <Image style={{borderRadius: "50%"}}
                       src={companyImage || "https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                       alt="Company Logo"
                       width="64"
                       height="64"/>
                <div className="jobDetails__info">
                    <div className="jobDetails__info__title">{title}</div>
                    <div className="jobDetails__info__section">
                        <div className="jobDetails__info__section__company">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-briefcase" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                            {postedBy}
                        </div>
                        <div className="jobDetails__info__section__location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            {location}
                        </div>
                        <div className="jobDetails__info__section__salary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-cash-stack" viewBox="0 0 16 16">
                                <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                                <path
                                    d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
                            </svg>
                            {salary}
                        </div>
                    </div>
                </div>
                <div className="jobDetails__tags">
                    {applied ? <div className="jobDetails__tags__applied">Applied</div> : ""}
                    {recommended ? <div className="jobDetails__tags__recommended">Recommended</div> : ""}
                    {status ? <div className="jobDetails__tags__status">{status}</div> : ""}
                </div>
                { applied && <div className="jobDetails__showTimeline" title={showTimeline ? "Hide Timeline" : "Show Timeline"} onClick={()=> setShowTimeline(!showTimeline)}>{showTimeline ? <UpCircleOutlined/> : <DownCircleOutlined/>}</div>}
                {(showTimeline) && <JobEventTimeline events={job.events}></JobEventTimeline>}
            </div>
        </div>
    )
}

export default JobDetails;