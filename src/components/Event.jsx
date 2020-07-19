import React, { Component, useState, alert } from "react";
import "./Event.css";

export default class CourseInchargeEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      host: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      inviteeName: "",
      invitees: [],
      typeOfEvent: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  }

  addInvitee() {
    this.setState({
      invitees: [...this.state.invitees, this.state.inviteeName]
    });
  }

  render() {
    return (
      <div id="page">
        <form>
          <label>
            <h2>Title of the event</h2><br/>
            <input
              type="text"
              id="title"
              placeholder="Event Title"
              onChange={this.handleChange}
              value={this.state.title}
            />
          </label>
          <br />
          <label>
            <h4>Description of the event</h4><br/>
            <textarea
              id="description"
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.handleChange}
              style={{
                height: "150px",
                width: "300px",
                cols: 30,
                wrap: "hard"
              }}
            />
          </label><br/>
          <label>
            <p>
              Name of the host:
              <input
                type="text"
                id="host"
                value={this.state.host}
                onChange={this.handleChange}
                placeholder="Host Name"
                style={{ marginLeft: 10 }}
              />
            </p>
          </label><br/>
          <label>
            <p>
              Select Event location:
              <select
                id="location"
                class="select-style"
                value={this.state.location}
                onChange={this.handleChange}
                style={{ marginLeft: 10 }}
              >
                <option value={null}> -- Please Choose a location --</option>
                <option value="203-A">203-A</option>
                <option value="203-B">203-B</option>
                <option value="203-C">203-C</option>
                <option value="203-D">203-D</option>
                <option value="216-A">216-A</option>
                <option value="Exam">216-B</option>
                <option value="216-C">216-C</option>
                <option value="216-MC">216-MC</option>
                <option value="216-D">216-D</option>
                <option value="216-E">216-E</option>
                <option value="216-F">216-F</option>
                <option value="225-A">225-A</option>
                <option value="225-B">225-B</option>
                <option value="230">230</option>
                <option value="202">202</option>
                <option value="CR-1">CR-1</option>
                <option value="CR-2">CR-2</option>
                <option value="Open Lobby">Open Lobby</option>
                <option value="SH-1">SH-1</option>
                <option value="Saranga Hall-119">Saranga Hall-119</option>
              </select>
            </p>
          </label><br/>
          <label>
            <p>
              Select event type:
              <select
                id="typeOfEvent"
                class="select-style"
                value={this.state.typeOfEvent}
                onChange={this.handleChange}
                style={{ marginLeft: 10 }}
              >
                <option value="">-- Choose the type of event --</option>
                <option value="Orientation">Orientation</option>
                <option value="Quiz event">Quiz event</option>
                <option value="Mentor training">Mentor training</option>
                <option value="Programming Test">Programming Test</option>
                <option value="Concept Test">Concept Test</option>
                <option value="Exam">Exam</option>
              </select>
            </p>
          </label><br/>
          <label>
            <p>
              Add an invitee:
              <input
                type="text"
                id="invitee"
                placeholder="Invitee"
                value={this.state.inviteeName}
                onChange={this.handleChange}
                style={{ marginLeft: 10 }}
              />
              <button id="addButton" onClick={() => this.addInvitee()}>
                {" "}
                Add{" "}
              </button>
            </p>
          </label><br/>
          <label>
            <p>
              Enter start date & time:
              <input type="date" style={{ marginLeft: 10 }} />
              <input type="time" style={{ marginLeft: 10 }} value="09:00" />
            </p>
          </label><br/>
          <label>
            <p>
              Enter end date & time:
              <input type="date" style={{ marginLeft: 10 }} />
              <input type="time" style={{ marginLeft: 10 }} value="09:00" />
            </p>
          </label><br/>
          <input
            id="submitButton"
            type="submit"
            value="Create Event"
            onSubmit={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}