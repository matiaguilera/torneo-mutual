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

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onoutclick?: () => void;
	}
}
