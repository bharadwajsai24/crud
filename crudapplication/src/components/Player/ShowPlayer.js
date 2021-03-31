import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { start } from '../../baseURL';

const ShowPlayer = () => {
    const [player, setPlayer] = useState({
        name: "",
        team: "",
        role: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadPlayer();
    }, []);
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
        <div className="container py-4">
            <Link className="btn btn-primary" to="/home">
                back to Home
      </Link>
            <h1 className="display-4">User Id: {id}</h1>
            <hr />
            <ul className="list-group w-50">
                <li className="list-group-item">name: {player.name}</li>
                <li className="list-group-item">team: {player.team}</li>
                <li className="list-group-item">role: {player.role}</li>

            </ul>
        </div>
    );
};

export default ShowPlayer;
