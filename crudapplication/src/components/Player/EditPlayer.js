import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { start } from '../../baseURL';

const EditPlayer = () => {
    let history = useHistory();
    const { id } = useParams();
    const [player, setPlayer] = useState({
        name: "",
        team: "",
        role: ""
    });

    const { name, role, team } = player;
    const onInputChange = e => {
        setPlayer({ ...player, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadPlayer();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        let data = player;
        const result = await axios(
            {
                url: start + `/player/update/${id}`,
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },
                data: JSON.stringify(data),
            });
        history.push("/home");
    };


    const loadPlayer = async () => {
        let data = { email: localStorage.getItem('email') };
        const result = await axios(
            {
                url: start + `/player/show/${id}`,
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },
                data: JSON.stringify(data),
            });


        setPlayer(result.data.data);
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit A Player</h2>
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
                            placeholder="Enter Player Team"
                            name="team"
                            value={team}
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
                    <button className="btn btn-warning btn-block">Update Player</button>
                </form>
            </div>
        </div>
    );
};
export default EditPlayer;
