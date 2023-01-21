const jobEventTimeline = ({events}) => {
    let sortedTimeline = [];
    for (const event in events) {

        sortedTimeline.push([event, new Date(events[event])])
    }
    sortedTimeline.sort(function (a,b){
        return a[1] - b[1];
    });

    if(sortedTimeline.length > 0) {
        return(
            <div className="timelineContainer">
                <ul>
                    {sortedTimeline.map((e) => {
                        return(
                            <li>
                                <div className="step">{e[0]}</div>
                                <span className="circle"/>
                                <span className="date">{e[1].toLocaleDateString()}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
    return "";
};

export default jobEventTimeline;