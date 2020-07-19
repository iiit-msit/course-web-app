import React, { Component } from 'react';
// import ReactFileReader from 'react-file-reader';
import CSVReader from 'react-csv-reader'

var mentorNames = [];


class ManualUpload extends Component {

    constructor(props) {
        super();
        this.state = {
            courses: [],
            emailBody: '',
            fromAddress: '',
            toAddress: '',
            subject: '',
            selectedCourse: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        fetch("https://9ewnx4im33.execute-api.ap-south-1.amazonaws.com/getAllCourses/")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(JSON.parse(result.body));
                const body = JSON.parse(result.body)
                this.setState({
                    courses: body.Items
                });
                console.log(this.state.items);
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
    }

    
    sendEmail(){
      var api_key = '9c49f5adf67d5e15a9cd53a59a40c747-8b34de1b-0ac930af';
      var domain = 'www.mydomain.com';
      var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
      
      var data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'serobnic@mail.ru',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomeness!'
      };
      
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
      });
    }

    handleChange(event) {
      const {name, value, type, checked} = event.target
      console.log(name)
      console.log(value)
      this.setState({
          [name]: value
      }) 
    }

    

    handlecsvfile(data, fileInfo){
        var batch = new Array();
        var count = 0;
        for(let i = 1; i < data.length;i += count){
            var batch1 = new Object();
            var val = data[i][3]
            let ex = new Array();
            for(let j = i; j < data[i].length;j++){
                if(data[j][3] === val){
                    ex.push(data[j][0])
                    count += 1;
                }
                else{
                    break;
                }
            }
            batch1["mentorId"] = val;
            batch1["studentId"] = ex;
            batch.push(batch1);
        }
        var courseId = this.state.selectedCourse
        console.log(batch)

        const body1 = {
            "batch": batch,
            "courseId": courseId,
            "courseInstanceLable": "Regular Frist Semester",
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body1)
        };
        fetch('https://j0yapzx411.execute-api.ap-south-1.amazonaws.com/updateBatchForCourseInstance', requestOptions)
            .then(response => {
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        // fetch('https://j0yapzx411.execute-api.ap-south-1.amazonaws.com/updateBatchForCourseInstance', {
        // method: 'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json',
        //   },
        // body: {
        //     batch: batch,
        //     courseId : courseId,
        //     courseInstanceLable : "Regular Frist Semester" 
        // }
        // })
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(err => {
        //     console.log(err)
        // })
        
    }


    render() {
        return (

            <div style = {{marginLeft: 400, inlineHeight: 100}}>
                <lable>
                    Select course:  
                    <select 
                    value={this.state.selectedCourse} 
                    name="selectedCourse" 
                    onChange={this.handleChange}
                    >
                        {this.state.courses.map((course)=>(
                            <option value={course['courseId']}>{course['courseName']}</option>
                        ))}
                    </select> 
                </lable>

                Manually upload allocation file:
                <br />

                <CSVReader onFileLoaded={(data, fileInfo) =>this.handlecsvfile(data, fileInfo)} />
                <br/>
                <br/>
                <br/>
                <button onClick={()=>this.sendEmail()}>Send email</button>
            </div>
        );
    }
}
export default ManualUpload;
// (data, fileInfo) => console.dir(data, fileInfo)