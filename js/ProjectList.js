import { El } from '/js/deps.js';

const defaultProps = {};

function ProjectList(props = defaultProps, ...children) {
  if (!children || children.length === 0) { return null; }

  return (
    El.section({ id: "projectList" },
      El.h2({}, "Projects"),
      El.hr(),
      El.div({ id: "timeline" },
        ...children
      )
    )
  );
}

export default ProjectList;