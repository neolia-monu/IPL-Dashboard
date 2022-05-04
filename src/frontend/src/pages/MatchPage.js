import { React , useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import {MatchDetailCard} from "../components/MatchDetailCard";

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    // const teamName ="Royal Challengers Bangalore";
    const { teamName, year } = useParams();

    useEffect(
        () => {
        const fetchMatches = async () => {
            const res = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await res.json();

            // console.log(data);

            setMatches(data);
        };

        fetchMatches();
    },
        [teamName, year]
    );

    return (
        <div className="MatchPage">
            <h3>Match Page</h3>

            { matches.map(match => <MatchDetailCard teamName={teamName} match={match} /> ) }

        </div>
    );
}