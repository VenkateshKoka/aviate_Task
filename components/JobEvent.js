const JobEvent = ({jobEvent}) => {
    return(
        <div className="jobEvent">
            <div className="jobEvent__date">{jobEvent[1].toLocaleDateString()}</div>
            <div className="jobEvent__jobId">
                <div className="jobEvent__jobId__company">{jobEvent[4]}</div>
                <div className="jobEvent__jobId__id">job id: {jobEvent[2]}</div>
            </div>
            <div className="jobEvent__event">
                <div className="jobEvent__event__name">{jobEvent[0]}</div>
                <div className="jobEvent__event__title">{jobEvent[3]}</div>
            </div>
        </div>
    )
};

export default JobEvent;