import { React , useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import { MatchDetailCard } from "../../components/MatchDetailCard/MatchDetailCard";
import {YearSelector} from "../../components/YearSelector/YearSelector";

import "./MatchPage.scss";


export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    // const teamName ="Royal Challengers Bangalore";
    const { teamName, year } = useParams();

    useEffect(
        () => {
        const fetchMatches = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/team/${teamName}/matches?year=${year}`);
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

            <div className="year-selector">
                <h3> Select Year </h3>
                <YearSelector teamName={teamName}/>
            </div>

            <div>
                <h1 className="page-heading">{teamName} matches in {year}</h1>
                {
                    matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} /> )
                }
            </div>

        </div>
    );
}