import React, {Component} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';


class MentorEvent extends React.Component{
    constructor() {
        super()
        this.state = {
            eventTitle:"",
            startDateAndTime:'',
            endDateAndTime:"",
            eventDescription:"",
            host:"",
            location:"",
            inviteName:"",
            invites:[],
            typeOfEvent:"",

        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        this.setState({
            [name]: value
        }) 
    }

    addInvites(){
        this.setState({
            invites:[...this.state.invites, this.state.inviteName]
        })
    }

    render() { 
        return (
            <main>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <div class="container">
                        
                        <form>
                        <table>
                            <tr>
                        <label>
                        Title of the event: 
                        
                        <input
                            name="eventTitle" 
                            value={this.state.eventTitle} 
                            onChange={this.handleChange} 
                            placeholder="event title" 
                        />

                    </label>
                    </tr>
                    <tr>                    
                     Description of the event:
                     </tr>
                     <tr>   
                    <textarea style={{height:"100px",width:"230px"}} name='eventDescription' value={this.state.eventDescription} onChange={this.handleChange} placeholder="Event DESCRIPTION" />
                    </tr>
                    <tr>
                    <label>
                        Name of the host: 
                    <input 
                        name="host" 
                        value={this.state.host}
                        onChange={this.handleChange} 
                        placeholder="host name" 
                    />
                    </label>
                    </tr>
                    <tr>
                    <lable>
                        Select event location: 
                        <select 
                        value={this.state.location} 
                        name="location" 
                        onChange={this.handleChange}
                        >
                            <option value="">-- Please Choose a location --</option>
                            <option value="203-A">203-A</option>
                            <option value="203-B">203-B</option>
                            <option value="203-C">203-C</option>
                            <option value="203-D">203-D</option>
                            <option value="216-A">216-A</option>
                            <option value="216-B">216-B</option>
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
                    </lable>
                    </tr>

                    <tr>
                    <lable>
                        Select the type of event:  
                        <select 
                        value={this.state.typeOfEvent} 
                        name="typeOfEvent" 
                        onChange={this.handleChange}
                        >
                            <option value="">-- Choose the type of event --</option>
                            <option value="Class">Class</option>
                            <option value="Quiz event">Quiz event</option>
                            <option value="Viva">Viva</option>
                            
                        </select> 
                    </lable>
                    </tr>
                    <tr>
                    <input 
                        name="inviteName" 
                        value={this.state.inviteName}
                        onChange={this.handleChange} 
                        placeholder="invite name" 
                    />
                    <button onClick={this.addInvites}>add invite</button>

                    </tr>
                    <tr>                    
                    <lable>
                        Enter event start date and time: (eg: 2020-06-02T07:30:00+05:30)
                        <input 
                            name="startDateAndTime" 
                            value={this.state.startDateAndTime}
                            onChange={this.handleChange} 
                            placeholder="2020-06-02T07:30:00+05:30" 
                        />
                    </lable>
                    </tr>
                    <tr>

                    <lable>
                        Enter  event end date and time: (eg: 2020-06-02T07:30:00+05:30)
                        <input 
                            name="endDateAndTime" 
                            value={this.state.endDateAndTime}
                            onChange={this.handleChange} 
                            placeholder="2020-06-02T07:30:00+05:30" 
                        />
                    </lable>
                    </tr>
                    
                    </table>
                    <button>Create Event</button>
                </form>
                </div>
                <div class="container">
                <h2>Entered information:</h2>
                    <table>
                        <tr>event title: {this.state.eventTitle} </tr>
                        <tr>event DESCRIPTION: {this.state.eventDescription}</tr>
                        <tr>event HOST: {this.state.host}</tr>
                        <tr>EVENT LOCATION: {this.state.location}</tr>
                        <tr>type of event: {this.state.typeOfEvent}</tr>
                        <tr>invitee name: {this.state.inviteName}</tr>
                    </table>
                </div>
                </div>
            </main>
        )
    }
}

export default MentorEvent