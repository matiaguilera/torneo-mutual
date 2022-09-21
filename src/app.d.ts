// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}

declare module 'luxon';

type League = import('@prisma/client').League;
type Team = import('@prisma/client').Team;
type Player = import('@prisma/client').Player;
type Goal = import('@prisma/client').Goal;
type Match = import('@prisma/client').Match;

type Tag = { name: string; url: string };

interface MatchWithTeams extends Match {
	home: Team;
	away: Team;
}

interface TeamWithPlayers extends Team {
	players: Player[];
}

interface MatchWithTeamsAndPlayers extends MatchWithTeams {
	home: TeamWithPlayers;
	away: TeamWithPlayers;
}

interface GoalWithPlayer extends Goal {
	player: Player;
}

type GoalWithoutId = {
	leagueId: number;
	matchId: number;
	teamId: number;
	receiverId: number;
	playerId: number;
};

interface MatchWithTeamsPlayersGoals extends MatchWithTeamsAndPlayers {
	goals: GoalWithPlayer[];
}

interface LeagueForMatches extends League {
	teams: Team[];
	matches: MatchWithTeamsPlayersGoals[];
}

type Standing = {
	code: string;
	name: string;
	mp: number;
	w: number;
	d: number;
	l: number;
	gf: number;
	ga: number;
	gd: number;
	pts: number;
};

type Scorer = {
	code: string;
	name: string;
	lastName: string;
	sum: number;
};

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onoutclick?: () => void;
	}
}
