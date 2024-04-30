import { El, React } from '/js/deps.js';
import MessageBroker from '/js/SubPub.js';
import Contact from '/js/Contact.js';
import JobList from '/js/JobList.js';
import JobEntry from '/js/JobEntry.js';
import ProjectList from '/js/ProjectList.js';
import SkillList from '/js/SkillList.js';
import SkillEntry from '/js/SkillEntry.js';
// import EducationList from '/js/EducationList.js';
// import EducationEntry from '/js/EducationEntry.js';

function Resume (props, ...children) {
  const { contact, jobHistory, skills, projects, education } = props;
  const broker = new MessageBroker();

  return (
    El.div({className: "container"}, 
      Contact(contact),
      JobList({},
        ...jobHistory.map(job => JobEntry({...job, broker}))
      ),
      ProjectList({},
      //  ...projects.map(project => ProjectEntry({...project, broker}))
        El.p({}, "This section is a work in progress.")
      ),
      SkillList({},
        ...skills.map(skill => SkillEntry({ ...skill, broker }))
      )
      // EducationList({},
      //   ...education.map(educationEntry => EducationEntry(educationEntry))
      // )
    )
  );
}


export default Resume;
