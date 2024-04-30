import { React, El } from '/js/deps.js';

class JobEntry extends React.Component {
  broker = this.props.broker;
  state = { active: false };

  componentDidMount() {
    this.broker.subscribe("job-entry-clicked", this.handleClick);
  }

  componentWillUnmount() {
    this.broker.unsubscribe("job-entry-clicked", this.handleClick);
  }

  // When this job is clicked, an event is emitted.
  // The event contains the job id and toggled "active" state.
  emitClick = () => {
    const message = {
      jobId: this.props.id,
      jobName: this.props.name,
      jobSkills: this.props.jobSkills,
      active: !this.state.active
    };
    this.broker.publish("job-entry-clicked", message);
  };

  // When any job is clicked, this function is called.
  // It check if the clicked job is the same as the current job.
  // If so, it toggles the active state. Otherwise, it sets the active state to false.
  handleClick = ({ jobId, active }) => {
    const match = jobId === this.props.id;
    this.setState({ active: (match && active) });
  };

  render() {
    const { id, name, title, description, bulletPoints } = this.props;

    return (
      El.div(
        { className: `entry${ this.state.active ? " active" : "" }`, id: id },
          El.div({ className: "entry-header", onClick: this.emitClick },
          El.strong({}, name), " | ", El.em({}, title)
        ),
        El.div({ className: "entry-content" },
          El.p({}, description),
          El.ul({}, ...bulletPoints.map(bulletPoint => El.li({}, bulletPoint)))
        )
      )
    );
  }
}

export default function (props, ...children) {
  return React.createElement(JobEntry, props, ...children);
}