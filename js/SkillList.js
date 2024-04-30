import { El } from '/js/deps.js';

const defaultProps = {};

function SkillList(props = defaultProps, ...children) {
  if (!children || children.length === 0) { return null; }
  
  return (
    El.section({ id: "skillList" },
      El.h2({}, "Skills"),
      El.hr(),
      El.div({ id: "tagCollection" }, // TODO implement tags
        ...children
      )
    )
  );
}

export default SkillList;