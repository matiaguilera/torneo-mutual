import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

type LeastBeatedTeams = Array<{ code: string; name: string; ga: number }>;

export const load: PageServerLoad = async () => {
	const scorers: Scorer[] = await prisma.$queryRaw`
    SELECT scorers.id, "Team".code, scorers.name, scorers."lastName", sum FROM 
    (SELECT "Player".id, name, "lastName", "Player"."teamId", sum(quantity)::smallint FROM "Player" INNER JOIN "Goal" ON "Player".id = "Goal"."playerId" WHERE "Player"."leagueId" = 1 GROUP BY "Player".id HAVING sum(quantity) > 0 ORDER BY sum(quantity) DESC, name ASC, "lastName" ASC)
    scorers
    INNER JOIN
    "Team"
    ON
    "Team".id = scorers."teamId";`;

	const teams: LeastBeatedTeams = await prisma.$queryRaw`
	SELECT name, code, ga::smallint FROM
	"Team"
	INNER JOIN
	(SELECT
	  "Team".id,
	  sum(case when "Goal"."receiverId" = "Team".id then quantity else 0 end) ga
	FROM
	  "Team"
	  INNER JOIN
	  (SELECT * FROM "Goal" WHERE "leagueId" = 1 AND quantity > 0) "Goal"
	ON "Goal"."teamId" = "Team".id OR "Goal"."receiverId" = "Team".id
	GROUP BY "Team".id) goals

	ON "Team".id = goals.id
	ORDER BY ga ASC, name ASC;`;
	// const standings: Standing[] =
	// 	await prisma.$queryRaw`SELECT name, code, mp::smallint, w::smallint, l::smallint, d::smallint, gf::smallint, ga::smallint, gd::smallint, pts::smallint FROM
	// (SELECT
	//   "Team".id,
	//   name,
	//   code,
	//   count(*) mp,
	//   count(case when result = "Team".id then 1 end) w,
	//   count(case when result != "Team".id AND result != 0 then 1 end) l,
	//   count(case when result = 0 then 1 end) d,
	//   sum(
	//     case when result = "Team".id then 3 else 0 end +
	//     case when result = 0 then 1 else 0 end
	//   ) pts
	// FROM
	//   "Team"
	//   INNER JOIN
	//   (SELECT * FROM "Match" WHERE status = 'Finalizado' AND "leagueId" = 1) "Match"
	// ON "Team".id = "Match"."homeId" OR "Team".id = "Match"."awayId"
	// GROUP BY "Team".id) matches

	// INNER JOIN

	// (SELECT
	//   "Team".id,
	//   sum(case when "Goal"."teamId" = "Team".id then quantity else 0 end) gf,
	//   sum(case when "Goal"."receiverId" = "Team".id then quantity else 0 end) ga,
	//   sum(case when "Goal"."teamId" = "Team".id then quantity else 0 end) -
	//   sum(case when "Goal"."receiverId" = "Team".id then quantity else 0 end) gd
	// FROM
	//   "Team"
	//   INNER JOIN
	//   (SELECT * FROM "Goal" WHERE "leagueId" = 1 AND quantity > 0) "Goal"
	// ON "Goal"."teamId" = "Team".id OR "Goal"."receiverId" = "Team".id
	// GROUP BY "Team".id) goals

	// ON matches.id = goals.id
	// ORDER BY pts DESC, gd DESC, name ASC;`;

	return {
		scorers,
		teams
	};
};

export const prerender = true;
