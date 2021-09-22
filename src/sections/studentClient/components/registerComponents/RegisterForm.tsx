import React, {FC, useEffect, useState} from 'react';
// import StudentClient from "../Api/StudentClient";

const RegisterForm: React.FC = () => {
    // const classes = useStyles();
    const [dataLoading,finishLoading]=useState(false);

    const onClick = () => {

    }

    return (
        <form  name="registerStudent">
            <h2 className="font-italic text-center">Sign up</h2>
            <div className="form-group">
                <label htmlFor="fName" >First name </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="fName"
                    id="fName"
                    // value={state.firstName}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="lName"
                    id="lastName"
                    // value={state.lastName}
                />

                <label htmlFor="email" >email </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    id="email"
                    // value={this.state.username}
                    // onChange={this.onUsernameChange}
                />
                <label htmlFor="phoneNumber" >phone </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="phoneNumber"
                    id="phoneNumber"
                    // value={this.state.username}
                    // onChange={this.onUsernameChange}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="street"
                    id="street"
                    // value={this.state.username}
                    // onChange={this.onUsernameChange}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="postCode"
                    id="postCode"
                    // value={this.state.username}
                    // onChange={this.onUsernameChange}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="city"
                    id="city"
                    // value={this.state.username}
                    // onChange={this.onUsernameChange}
                />

            </div>
            <div className="form-group">
                <label htmlFor="password">Password </label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    // value={this.state.password}
                    // onChange={this.onPasswordChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="photoLink">Password </label>
                <input
                    type="photoLink"
                    className="form-control"
                    placeholder="photoLink"
                    id="photoLink"
                    // value={this.state.password}
                    // onChange={this.onPasswordChange}
                />
            </div>
            <div className="form-group">
                <button
                    type="submit"

                    onClick={onClick}
                >
                    Create Student
                </button>
            </div>
        </form>
    );
}