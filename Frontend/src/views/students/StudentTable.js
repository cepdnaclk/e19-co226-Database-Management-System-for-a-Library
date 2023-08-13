import React from 'react';
import { variables } from 'Variables';

export default class StudentsTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            students:[],
            role:"",
            name:"",
            email:"",
            contact:"",
            gender:"",
            nic:0
        }
    }
    
    refreshList() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL+'Students', {
            headers: {
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            }
        })
        .then(response=>response.json())
        .then(data=>{this.setState({students:data});
        }).catch(error => {
            console.error('Error fetching books:', error);
            // You can display an error message to the user if needed
        });
    }

    componentDidMount()
    {
        this.refreshList();
    }

    changeRollNo = (e)=>{
        this.setState({role:e.target.value});
    }

    changeName = (e)=>{
        this.setState({name:e.target.value});
    }

    changeCourse = (e)=>{
        this.setState({email:e.target.value});
    }

    changeContact = (e)=>{
        this.setState({contact:e.target.value});
    }

    changeGender = (e)=>{
        this.setState({gender:e.target.value});
    }
    changeId = (e)=>{
        this.setState({nic:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:'Add Student',
            nic:0,
            role:"",
            name:"",
            email:"",
            contact:"",
            gender:""
        });
    }

    editClick(cs){
        this.setState({
            modalTitle:'Edit Student',
            nic:cs.nic,
            role:cs.role,
            name:cs.name,
            email:cs.email,
            contact:cs.contact,
            gender:cs.gender
        });
    }

    createClick() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        // Check if any required fields are missing
        if (!this.state.nic||!this.state.role || !this.state.name || !this.state.email || !this.state.contact || !this.state.gender) {
          alert('Please fill in all required fields.');
          return;
        }
      
        // Send the request to create the student
        fetch(variables.API_URL + 'Students', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedToken}` // Include the token in the headers
          },
          body: JSON.stringify({
            nic:this.state.nic,
            role: this.state.role,
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            gender: this.state.gender
          })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to update');
            }
        })
        .then((result)=>{
            this.refreshList();
            const closeButton = document.getElementById('closeButton');
            if (closeButton) {
                closeButton.click();
            }
        },()=>{
            alert('Failed');
        });
      }      

    updateClick(){
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL+'Students',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            },
            body:JSON.stringify({
                nic:this.state.nic,
                role:this.state.role,
                name:this.state.name,
                email:this.state.email,
                contact:this.state.contact,
                gender:this.state.gender
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to update');
            }
        })
        .then((result)=>{
            this.refreshList();
            const closeButton = document.getElementById('closeButton');
            if (closeButton) {
                closeButton.click();
            }
        },()=>{
            alert('Failed');
        });
    }

    deleteClick(cs){
        const storedToken = JSON.parse(localStorage.getItem('token'));
        if(window.confirm('Are you Sure to Delete?')) {
        fetch(variables.API_URL+'Students',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            },
            body:JSON.stringify({
                nic:cs.nic
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to update');
            }
        })
        .then((result)=>{
            this.refreshList();
            const closeButton = document.getElementById('closeButton');
            if (closeButton) {
                closeButton.click();
            }
        },()=>{
            alert('Failed');
        });
    }
    }

    render(){
        const {
            students,
            modalTitle,
            nic,
            role,
            name,
            email,
            contact,
            gender,
        } = this.state;

        return(
            <div>
                <button type='button'
                className='btn btn-primary mt-3 mb-3 float-end'
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.addClick()}>
                    Add Students
                </button>
               
                <div className='table-responsive' style={{borderRadius: '5px'}}>
                <table className="table table-borderless table-hover">
                    <thead style={{background:'#90caf9'}}>
                        <tr>
                            <th>NIC</th>
                            <th>Role</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(cs=>
                                <tr key={cs.nic}>
                                    <td>{cs.nic}</td>
                                    <td>{cs.role}</td>
                                    <td>{cs.name}</td>
                                    <td>{cs.email}</td>
                                    <td>{cs.contact}</td>
                                    <td>{cs.gender}</td>
                                    <td>
                                    <button type="button"
                                            className="btn btn-light mr-1"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={()=>this.editClick(cs)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="18" height="18"
                                                    viewBox="0 0 48 48">
                                                    <path fill="#3F51B5" d="M38,13c0,0.553-0.447,1-1,1H5c-0.552,0-1-0.447-1-1V6c0-0.553,0.448-1,1-1h32c0.553,0,1,0.447,1,1V13z"></path><path fill="#BBDEFB" d="M4 10H38V39H4z"></path><path fill="#E57373" d="M43.678,25.142l-2.82-2.819c-0.429-0.43-1.126-0.43-1.555,0l-1.328,1.328l4.376,4.375l1.327-1.328C44.107,26.268,44.107,25.572,43.678,25.142"></path><path fill="#FF9800" d="M23.109 31.089H40.525000000000006V37.277H23.109z" transform="rotate(-45.001 31.818 34.184)"></path><path fill="#B0BEC5" d="M37.521 23.837H40.615V30.026H37.521z" transform="rotate(134.983 39.068 26.933)"></path><path fill="#FFC107" d="M23.473 38.152L22 44 27.848 42.528z"></path><path fill="#37474F" d="M22.744 41.044L22 44 24.956 43.256z"></path><path fill="#1976D2" d="M27.796 31L15 31 15 33 25.797 33zM31 27.796L31 27 15 27 15 29 29.796 29zM15 19H31V21H15zM15 15H31V17H15zM11 15H13V17H11zM11 19H13V21H11zM11 31H13V33H11z"></path><path fill="#1976D2" d="M15 31v2h7c0-.684.071-1.351.191-2H15zM11 23H13V25H11zM11 27H13V29H11zM15 23H31V25H15z"></path>
                                            </svg>
                                        </button>
                                        <button type="button"
                                            className="btn btn-light mr-1"
                                            onClick={()=>this.deleteClick(cs)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="18" height="18"
                                                viewBox="0 0 48 48">
                                                <path fill="#ff3d00" d="M34,11l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V11H34z"></path><path fill="#ff6e40" d="M11,7h26c1.1,0,2,0.9,2,2v2H9V9C9,7.9,9.9,7,11,7z"></path><path fill="#fafafa" d="M15.515 25H32.486000000000004V29H15.515z" transform="rotate(-45.001 24 27)"></path><path fill="#fafafa" d="M22 18.515H26V35.486000000000004H22z" transform="rotate(-45.001 24 27)"></path>
                                                </svg>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
               
                
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" id="closeButton" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">NIC</span>
                                    <input type="number" className="form-control" value={nic} onChange={this.changeId}/>
                                </div>
                                <div className="input-group mb-3">
                                <span className="input-group-text">Role</span>
                                <select
                                    className="form-control"
                                    value={role}
                                    onChange={this.changeRollNo}
                                    required
                                >
                                    <option value="" hidden>Select Role</option>
                                    <option value="Student">Student</option>
                                    <option value="Staff">Staff</option>
                                    <option value="Guest">Guest</option>
                                </select>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Name</span>
                                    <input type="text" className="form-control" value={name} onChange={this.changeName}/>
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Email</span>
                                    <input type="email" className="form-control" value={email} onChange={this.changeCourse}/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Contact</span>
                                    <input type="number" className="form-control" value={contact} onChange={this.changeContact}/>
                                </div>
                                <div className="input-group mb-3">
                                <span className="input-group-text">Gender</span>
                                <select
                                    className="form-control"
                                    value={gender}
                                    onChange={this.changeGender}
                                    required
                                >
                                    <option value="" hidden>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                </div>

                                {nic===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}
                                >Create</button>
                                :null}

                                {nic!==0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}
                                >Create</button>
                                :null}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
