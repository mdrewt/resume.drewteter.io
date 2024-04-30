import { React, El } from '/js/deps.js';

class SkillEntry extends React.Component {
  broker = this.props.broker;
  state = { active: false };

  componentDidMount() {
    this.broker.subscribe("job-entry-clicked", this.handleClick);
  }

  componentWillUnmount() {
    this.broker.unsubscribe("job-entry-clicked", this.handleClick);
  }

  emitClick = () => {
    this.broker.publish("skill-entry-clicked", { name: this.props.name });
  };

  handleClick = ({ jobSkills, active }) => {
    const match = jobSkills.indexOf(this.props.name) !== -1;
    this.setState({ active: (match && active) });
  };

  render() {
    const { name } = this.props;

    return (
      El.div(
        { className: `tag${this.state.active ? " active" : ""}`, id: name, onClick: this.emitClick },
        El.strong({}, name)
      )
    );
  }
}

export default function (props, ...children) {
  return React.createElement(SkillEntry, props, ...children);
}