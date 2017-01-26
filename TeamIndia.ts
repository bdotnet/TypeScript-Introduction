'use strict';
import { CalculateTourAllowance } from './Tour';

// interface example
interface Player {
    name: string;
    age: number;
    role: string
}
// intereface with method that return void
interface play {
    bat(): void;
}
// sample class with constructor | Abstractions | Data Annotations | Optinal Parameters
// Properties | Arrow function | Method Overloading
class TeamIndia implements play {
    private totalPlayers = 11;
    batsmen;
    private bowlers;
    wicketkeeper;
    players: Array<Player> = [
        { "name": "kohli", "age": 29, "role": "batsmen" },
        { "name": "dhoni", "age": 36, "role": "wicketkeeper" },
        { "name": "ganguly", "age": 43, "role": "coach" }
    ];
    constructor(batsmen: number, bowlers?: number, wicketkeeper?: number) {
        this.batsmen = batsmen;
        this.bowlers = bowlers;
        this.wicketkeeper ? this.wicketkeeper = wicketkeeper : this.wicketkeeper = 6;
    }
    get Bowlers(): number {
        return this.bowlers;
    }
    set Bowlers(numberOfBowlers: number) {
        this.bowlers = numberOfBowlers;
    }
    bat = () => {
        console.log("bat");
    }

    getPlayer(name: string): Player;
    getPlayer(age: number): Player;

    getPlayer(playerProperty: any): Player {
        if (typeof playerProperty === 'number')
            return this.players.find(function (playersDetail) {
                return playersDetail.age === playerProperty;
            });
        else if (typeof playerProperty === 'string') {
            return this.players.find(function (playersDetail) {
                return playersDetail.name === playerProperty;
            });
        }
    };

    printPlayer(currentPlayer: Player) {
        console.log("Player information is " + JSON.stringify(currentPlayer))
    }
}

// sample output
var a = new TeamIndia(10, 2, 1);;
// example duck typing
var newPlayer = { "name": "dravid", "age": 43, "role": "mentor", "state": "Karnataka" };
a.printPlayer(newPlayer);
a.bat();
CalculateTourAllowance(10);
