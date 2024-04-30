import { El } from '/js/deps.js';

function EducationList(props, ...children) {
  if (!children || children.length === 0) { return null; }

  return (
    El.section({ id: "education" },
      El.h2({}, "Education"),
      El.ul({}, ...children)
    )
  );
}

export default EducationList;