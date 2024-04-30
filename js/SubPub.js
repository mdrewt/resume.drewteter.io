function MessageBroker () {
	this.events = {};

  this.subscribe = function(event, callback) {
    if (!this.events[event]) { this.events[event] = []; }
    this.events[event].push(callback);

    return () => this.unsubscribe(event, callback);
  }

  this.publish = function(event, data) {
    if (!this.events[event]) { return false; }
    this.events[event].forEach(function(callback) {
      callback(data);
    });

    return true;
  }

  this.unsubscribe = function(event, callback) {
    let unsubscribed = false;
    if (!this.events[event]) { return unsubscribed; }

    this.events[event] = this.events[event].filter(function(cb) {
      if (cb === callback) { unsubscribed = true; }
      return cb !== callback;
    });

    return unsubscribed;
  }
}

export default MessageBroker;