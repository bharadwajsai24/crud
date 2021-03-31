import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { start } from "../../baseURL.js";

const Home = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadPlayers();
    }, []);
    
    const loadPlayers = async () => {
      //  window.location.reload();
     
        let data = { email: localStorage.getItem('email') };
        const result = await axios(
            {
                url: start + "/player/show",
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },
                data: JSON.stringify(data),
            });


        setPlayers(result.data.data.reverse());
    };

    const deleteplayer = async id => {

        const result = await axios(
            {
                url: start + `/player/delete/${id}`,
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": localStorage.getItem('token')
                },

            });
        loadPlayers();
    };

    return (
        
        <div className="container">
           
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Role</th>
                            <th scope="col">Team</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{player.name}</td>
                                <td>{player.role}</td>
                                <td>{player.team}</td>
                                <td>
                                    <Link class="btn btn-primary mr-2" to={`/players/${player.id}`}>
                                        View
                  </Link>
                                    <Link
                                        class="btn btn-outline-primary mr-2"
                                        to={`/players/edit/${player.id}`}
                                    >
                                        Edit
                  </Link>
                                    <Link
                                        class="btn btn-danger"
                                        onClick={() => deleteplayer(player.id)}
                                    >
                                        Delete
                  </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
