import React from 'react';
import { variables } from 'Variables';

export default class UserTable extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            users:[],
            username:"",
            email:"",
            role:"",
            userPassword:"",
            id:0
        }
    }
    
    refreshList() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL+'user', {
            headers: {
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            }
        })
        .then(response=>response.json())
        .then(data=>{this.setState({users:data});
        });
    }

    componentDidMount()
    {
        this.refreshList();
    }

    changeName = (e)=>{
        this.setState({username:e.target.value});
    }

    changeContact = (e)=>{
        this.setState({email:e.target.value});
    }

    changePassword = (e)=>{
        this.setState({userPassword:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:'Add Admin',
            id:0,
            username:"",
            email:"",
            userPassword:""
        });
    }



    createClick(){
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL+'api/auth/signup',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            },
            body:JSON.stringify({
                username:this.state.username,
                email:this.state.email,
                password:this.state.userPassword,
                role: 'admin'
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
        fetch(variables.API_URL+'user',{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${storedToken}` // Include the token in the headers
            },
            body:JSON.stringify({
                id:cs.id
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
            users,
            modalTitle,
            id,
            username,
            email,
            userPassword,
        } = this.state;

        return(
            <div>
                <button type='button'
                className='btn btn-primary mt-3 mb-3 float-end'
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.addClick()}>
                    Add Admin
                </button>
                
                <div className='table-responsive' style={{borderRadius: '5px'}}>
                <table className="table table-borderless table-hover">
                    <thead style={{background:'#90caf9'}}>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(cs=>
                                <tr key={cs.id}>
                                    <td>{cs.id}</td>
                                    <td>{cs.username}</td>
                                    <td>{cs.email}</td>
                                    <td>
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
                                    <span className="input-group-text">Name</span>
                                    <input type="text" className="form-control" value={username} onChange={this.changeName}required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Email</span>
                                    <input type="email" className="form-control" value={email} onChange={this.changeContact} required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Password</span>
                                    <input type="password" className="form-control" value={userPassword} onChange={this.changePassword} required/>
                                </div>

                                {id===0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.createClick()}
                                >Create</button>
                                :null}

                                {id!==0?
                                <button type="button"
                                className="btn btn-primary float-start"
                                onClick={()=>this.updateClick()}
                                >Update</button>
                                :null}
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                
        )
    }
}
