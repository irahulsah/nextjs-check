import React from 'react'

class Modal extends React.Component{
    constructor(props){
        super(props)
        this.controlButton = null;
    }
     closeModal = ()=>{
        this.controlButton.click();
    }
     submitHandler = ()=>{
        alert(`done`);
        closeModal();
    }
    render(){return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Create Anime
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.props.children}
                </div>
                <div className="modal-footer">
                    <button ref={ele => this.controlButton = ele} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" onClick={this.submitHandler} className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}
}


export default Modal;
