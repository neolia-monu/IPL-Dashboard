import { React, useState, useEffect} from "react";
import { TeamTitle } from "../../components/TeamTitle/TeamTitle";

import "./HomePage.scss";

export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchAllTeams = async () => {

                const res = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team`);
                const data = await res.json();

                // console.log(data);

                setTeams(data);
            };

            fetchAllTeams();
        },
        []
    )

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                { teams.map(team => <TeamTitle key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
    );
}