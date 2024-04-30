import { El } from '/js/deps.js';

function EducationHistory(props, ...children) {
  const { name, degree, startDate, endDate } = props;

  return (
    El.li({}, 
      name,
      ...children
    )
  );
}

export default EducationHistory;