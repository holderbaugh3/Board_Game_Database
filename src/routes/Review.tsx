import React, { FormEvent, useState } from 'react';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

const gameTypeOptions = ['Board', 'Card', 'Dice', 'Models', 'Tiles'];
const teamsOptions = ['Yes - Required', 'Yes - Optional', 'No'];
const coopOptions = ['Yes - Required', 'Yes - Optional', 'No', 'Asymmetrical PvP'];
const complexityOptions = ['Baby', 'Low', 'Medium', 'High', 'Very High'];

function Review() {
  const [name, setName] = useState('');
  const [gameName, setGameName] = useState('');
  const [playtime, setPlaytime] = useState(0.0);
  const [playerCount, setPlayerCount] = useState({ min: 0, max: 0});
  const [gameType, setGameType] = useState('');
  const [gameTypes, setGameTypes] = useState(gameTypeOptions)
  const [gameCategory, setGameCategory] = useState('');
  const [teams, setTeams] = useState<string | null>();
  const [coop, setCoop] = useState<string | null>();
  const [complexity, setComplexity] = useState<string | null>();
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label className="name">Your Name: </label>
            <TextField id={"name"} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
        <label className="gameName">Game: </label>
            <TextField id={"gameName"} value={gameName} onChange={(e) => setGameName(e.target.value)} />
        </div>
        <div>
            <label className="playtime">Playtime in Hours: </label>
            <TextField id={"playtime"} value={playtime} onChange={(e) => setPlaytime(parseFloat(e.target.value))} />
        </div>
        <div>
            <label className="playerCount">Player count: </label>
            <div>
                <label className="minPlayerCount">minimum: </label>
                <TextField id={"minPlayerCount"} value={playerCount.min} onChange={(e) => setPlayerCount({ max: playerCount.max, min: parseInt(e.target.value)})} />
                <label className="maxPlayerCount">maximum: </label>
                <TextField id={"maxPlayerCount"} value={playerCount.max} onChange={(e) => setPlayerCount({ min: playerCount.min, max: parseInt(e.target.value)})} />
            </div>
        </div>
        <div>
        <label className="gameType">Game Type: </label>
        <Autocomplete
            //todo fix this to dynamically add them to gameTypes https://mui.com/material-ui/react-autocomplete/
            value={gameType}
            id="className"
            selectOnFocus
            clearOnBlur
            options={gameTypes}
            style={{ width: 300 }}
            freeSolo
            renderInput={(params: any) => (
                <TextField {...params} label="Select an Option or Type One"
                    variant="outlined" />
            )}
        />
        </div>
        <div>
            <label className="gameCategory">Game Category: </label>
            <TextField id="gameCategory" value={gameCategory} onChange={(e) => setGameCategory(e.target.value)}/>
        </div>
        <div>
            <label className="teams">Teams: </label>
            <Autocomplete
                value={teams}
                id="teams"
                selectOnFocus
                clearOnBlur
                options={teamsOptions}
                style={{ width: 300 }}
                onChange={(event: any, newValue: string | null) => {
                    setTeams(newValue);
                }}
                renderInput={(params: any) => (
                    <TextField {...params} label="Select an Option"
                        variant="outlined" />
                )}
            />
        </div>
        <div>
            <label className="coop">Co-op: </label>
            <Autocomplete
                value={coop}
                id="coop"
                selectOnFocus
                clearOnBlur
                options={coopOptions}
                style={{ width: 300 }}
                renderInput={(params: any) => (
                    <TextField {...params} label="Select an Option"
                        variant="outlined" />
                )}
                onChange={(event: any, newValue: string | null) => {
                    setCoop(newValue);
                }}
            />
        </div>
        <div>
            <label className="complexity">Complexity: </label>
            <Autocomplete
                value={complexity}
                id="complexity"
                selectOnFocus
                clearOnBlur
                options={complexityOptions}
                style={{ width: 300 }}
                renderInput={(params: any) => (
                    <TextField {...params} label="Select an Option"
                        variant="outlined" />
                )}
                onChange={(event: any, newValue: string | null) => {
                    setComplexity(newValue);
                }}
            />
        </div>
        <div>
            <label className="notes">Personal Notes: </label>
            <TextField id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
        </div>
        <button type="submit">Submit Game Review</button>
    </form>
  );
}

export default Review;