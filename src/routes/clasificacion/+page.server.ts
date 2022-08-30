import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const scorers: Scorer[] =
		await prisma.$queryRaw`SELECT "Player".id, name, "lastName", sum(quantity)::smallint FROM "Player" INNER JOIN "Goal" ON "Player".id = "Goal"."playerId" WHERE "Player"."leagueId" = 1 GROUP BY "Player".id ORDER BY sum DESC;`;

	const standings: Standing[] =
		await prisma.$queryRaw`SELECT name, mp::smallint, w::smallint, l::smallint, d::smallint, gf::smallint, ga::smallint, gd::smallint, pts::smallint FROM
  (SELECT 
    "Team".id,
    name, 
    count(*) mp,
    count(case when result = "Team".id then 1 end) w,
    count(case when result != "Team".id AND result != 0 then 1 end) l,
    count(case when result = 0 then 1 end) d,
    sum(
      case when result = "Team".id then 3 else 0 end +
      case when result = 0 then 1 else 0 end
    ) pts
  FROM 
    "Team" 
    INNER JOIN 
    (SELECT * FROM "Match" WHERE status = 'Finalized' AND "leagueId" = 1) "Match"
  ON "Team".id = "Match"."homeId" OR "Team".id = "Match"."awayId" 
  GROUP BY "Team".id) matches
  
  INNER JOIN
  
  (SELECT 
    "Team".id,
    sum(case when "Goal"."teamId" = "Team".id then quantity else 0 end) gf,
    sum(case when "Goal"."receiverId" = "Team".id then quantity else 0 end) ga,
    sum(case when "Goal"."teamId" = "Team".id then quantity else 0 end) -
    sum(case when "Goal"."receiverId" = "Team".id then quantity else 0 end) gd
  FROM
    "Team"
    INNER JOIN
    (SELECT * FROM "Goal" WHERE "leagueId" = 1 AND quantity > 0) "Goal"
  ON "Goal"."teamId" = "Team".id OR "Goal"."receiverId" = "Team".id
  GROUP BY "Team".id) goals
  
  ON matches.id = goals.id
  ORDER BY pts DESC, gd DESC;`;

	return {
		standings,
		scorers
	};
};
