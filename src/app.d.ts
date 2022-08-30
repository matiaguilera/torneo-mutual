// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface PrivateEnv {}
	// interface PublicEnv {}
}

type Tag = { name: string; url: string };

type Team = import('@prisma/client').Team;

type Goal = import('@prisma/client').Goal;

interface GoalWithPlayer extends Goal {
	player: Player;
}

type Standing = {
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
	name: string;
	lastName: string;
	sum: number;
};

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onoutclick?: () => void;
	}
}
