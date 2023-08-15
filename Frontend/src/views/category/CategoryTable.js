import React from 'react';
import { variables } from 'Variables';

export default class CategoryTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            categoryId: 0,
            name: "",
            notes: "",
            createDate: "",
        };
    }

    refreshList() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL + 'categories', {
            headers: {
                'Authorization': `Bearer ${storedToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ categories: data });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    changeName = (e) => {
        this.setState({ name: e.target.value });
    }

    changeNotes = (e) => {
        this.setState({ notes: e.target.value });
    }

    changeId = (e) => {
        this.setState({ categoryId: e.target.value });
    }

    addClick() {
        this.setState({
            modalTitle: 'Add Category',
            categoryId: 0,
            name: "",
            notes: "",
            createDate: ""
        });
    }

    editClick(cs) {
        this.setState({
            modalTitle: 'Edit Category',
            categoryId: cs.categoryId,
            name: cs.name,
            notes: cs.notes,
            createDate: cs.createDate
        });
    }

    createClick() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        if (!this.state.name || !this.state.notes) {
            alert('Please fill in all required fields.');
            return;
        }
        fetch(variables.API_URL + 'categories', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedToken}`
            },
            body: JSON.stringify({
                categoryId: this.state.categoryId,
                name: this.state.name,
                notes: this.state.notes,
                createDate: this.state.createDate
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to update');
                }
            })
            .then((result) => {
                this.refreshList();
                const closeButton = document.getElementById('closeButton');
                if (closeButton) {
                    closeButton.click();
                }
            }, () => {
                alert('Failed');
            });
    }

    updateClick() {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL + 'categories', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedToken}`
            },
            body: JSON.stringify({
                categoryId: this.state.categoryId,
                name: this.state.name,
                notes: this.state.notes,
                createDate: this.state.createDate
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to update');
                }
            })
            .then((result) => {
                this.refreshList();
                const closeButton = document.getElementById('closeButton');
                if (closeButton) {
                    closeButton.click();
                }
            }, () => {
                alert('Failed');
            });
    }

    deleteClick(cs) {
        const storedToken = JSON.parse(localStorage.getItem('token'));
        fetch(variables.API_URL + 'categories', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${storedToken}`
            },
            body: JSON.stringify({
                categoryId: cs.categoryId
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to update');
                }
            })
            .then((result) => {
                this.refreshList();
            }, () => {
                alert('Failed');
            });
    }

    render() {
        const {
            categories,
            modalTitle,
            categoryId,
            name,
            notes,
            createDate
        } = this.state;


        return (
            <div>
                <button type='button'
                    className='btn btn-primary mt-3 mb-3 float-end'
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.addClick()}>
                    Add Category
                </button>

                <div className='table-responsive' style={{ borderRadius: '5px' }}>
                    <table className="table table-borderless table-hover">
                        <thead style={{ background: '#90caf9' }}>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Notes</th>
                                <th>Create Date</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map(cs =>
                                    <tr key={cs.categoryId}>
                                        <td>{cs.categoryId}</td>
                                        <td>{cs.name}</td>
                                        <td>{cs.notes}</td>
                                        <td>{cs.createDate}</td>
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
                                <button type="button" id="closeButton" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <span className="input-group-text">Name</span>
                                    <input type="text" className="form-control" value={name} onChange={this.changeName} />
                                </div>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">Notes</span>
                                    <input type="text" className="form-control" value={notes} onChange={this.changeNotes} />
                                </div>

                                {categoryId === 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.createClick()}
                                    >Create</button>
                                    : null}

                                {categoryId !== 0 ?
                                    <button type="button"
                                        className="btn btn-primary float-start"
                                        onClick={() => this.updateClick()}
                                    >Update</button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
