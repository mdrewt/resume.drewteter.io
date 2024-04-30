import { El } from '/js/deps.js';

const defaultProps = {};

function JobList(props=defaultProps, ...children) {
  if (!children || children.length === 0) { return null; }
  
  return (
    El.section({ id: "jobList" },
      El.h2({}, "Employment History"),
      El.hr(),
      El.div({ id: "timeline" }, 
        ...children
      )
    )
  );
}

export default JobList;