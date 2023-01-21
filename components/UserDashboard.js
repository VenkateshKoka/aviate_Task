import JobEventTimeline from "./JobEventTimeline";
import JobDetails from "./JobDetails";
import {useState} from "react";
import {Avatar, Menu} from "antd";
import Image from "next/image";
import JobEvent from "./JobEvent";
const {Item} = Menu;


const UserDashboard = ({user}) => {
    const [clicked, setClicked] = useState(0);
    const [collapsed, setCollapsed] = useState(false);

    let {firstname, lastname, jobs} = user;
    let sortedEvents = [];
    for (let job of jobs) {
        for (const event in job.events) {
            sortedEvents.push([event, new Date(job.events[event]), job.id, job.title, job.postedBy])
        }
    }
    sortedEvents.sort(function (a,b){
        return a[1] - b[1];
    });
    let upcoming = sortedEvents.filter((e) => e[1] >= new Date()).slice(0,5);
    let past = sortedEvents.filter((e) => e[1] < new Date()).reverse().slice(0,5);
    let recommendedJobs = jobs.filter((job) => job.recommended);
    let appliedJobs = jobs.filter((job) => job.applied);
    let jobTypes = [[jobs, "All Jobs"], [recommendedJobs, "Recommended"], [appliedJobs, "Applied"]]
    return(
        <div className="container dashboard">
            <div className="dashboard__profilePic">
                <Image style={{borderRadius: "50%"}} src={"https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} width="160" height="160"></Image>
            </div>
            <div className="dashboard__names">
                <div className="dashboard__names__firstName">{firstname}</div>
                <div className="dashboard__names__secondName">{lastname}</div>
            </div>
            <div className="dashboard__events">
                <div className="dashboard__events__upcoming">
                    <h4>Upcoming Events</h4>
                    {upcoming.map((e, index) => (
                        <JobEvent key={index} jobEvent={e}/>
                        ))
                    }
                </div>
                <div className="dashboard__events__past">
                    <h4>Past Events</h4>
                    {past.map((e, index) => (
                        <JobEvent key={index} jobEvent={e}/>
                    ))
                    }
                </div>
            </div>
            <div className="dashboard__allJobs">
                <div className="dashboard__allJobs__sideNav">
                    {jobTypes.map((jobType, index)=> {
                        return(
                            <div className={`dashboard__allJobs__sideNav__option ${clicked===index ? "selected":""}`}
                                 key={index}
                                 onClick={()=> setClicked(index)}>
                                <div className="dashboard__allJobs__sideNav__option__name">
                                    {jobType[1]}
                                </div>
                                <div className="dashboard__allJobs__sideNav__option__count">
                                    {jobType[0].length}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="dashboard__allJobs__content">
                    {jobTypes[clicked][0].map((job, index) => (
                            <JobDetails key={index} job={job}></JobDetails>
                        )
                    )}
                </div>
            </div>
        </div>
    )
};

export default UserDashboard;