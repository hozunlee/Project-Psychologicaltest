    <table className="table">
    <thead>
        <tr>
        <th scope="col" style={{ whiteSpace: "nowrap", minWidth: 120 }}>
            분야
        </th>
        <th scope="col">직업</th>
        </tr>
        {educationLevelNames.map((educationLevelName, educationLevelIndex) => {
        const jobsByEducationLevel = (jobs || []).filter((job) => {
            return job?.[2] === educationLevelIndex + 1;
        });
        return (
            <tr style={jobsByEducationLevel.length <= 0 ? { display: "none" } : {}}>
            <td
                style={{
                whiteSpace: "nowrap",
                }}
            >
                {educationLevelName}
            </td>
            <td>
                {jobsByEducationLevel.map((job) => {
                const [jobSeq, jobName] = job;
                return (
                    <a
                    className="mr-2"
                    href={`https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ=${jobSeq}`}
                    target="_blank"
                    rel="noreferrer"
                    >
                    {jobName}
                    </a>
                );
                })}
            </td>
            </tr>
        );
        })}
    </thead>
    </table>;
