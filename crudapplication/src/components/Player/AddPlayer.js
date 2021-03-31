import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { start } from '../../baseURL';

const AddPlayer = () => {
    let history = useHistory();
    const [player, setPlayer] = useState({
        name: "",
        role: "",
        team: ""
    });

    const { name, role, team } = player;
    const onInputChange = e => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        let data = player;
        const result = await axios(
            {
                url: start + `/player/add`,
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },
                data: JSON.stringify(data),
            });
        history.push("/home");
    };

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A Player</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Player Name"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter player Role"
                            name="role"
                            value={role}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Player Team"
                            name="team"
                            value={team}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button className="btn btn-primary btn-block">Add Player</button>
                </form>
            </div>
        </div>
    );
};

export default AddPlayer;
