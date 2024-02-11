//Routes to create the organization
import { headers } from 'next/headers';

import { db } from '@/lib/db';
import { getSelf } from "@/lib/auth-service";
import { NextResponse } from 'next/server';

// id             String        @id @default(uuid())
//   title          String
//   description    String
//   organization   Organization? @relation(fields: [organizationId], references: [id]) // Association with Organization
//   startDate      DateTime
//   endDate        DateTime
//   rules          String
//   gameName       String
//   thumbnailUrl   String?
//   mode           String // Mode can be multiplayer or singleplayer
//   organizationId String?

//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   teams          Team[] // A tournament can have multiple teams
//   TeamTournament TeamTournament[]

export async function POST(req: Request, res: Response) {
    console.log("HELLOOO")
    console.log("REquest REcieved: ");
    console.log(req.json());


    //current user i.e. self
    const self = await getSelf();

    const { title, description, organization, startDate, endDate, rules, gameName, thumbnailUrl, } = await req.json();

    console.log("Organization created: ",)

    //create new tournament
    const tournament = await db.tournament.create({
        data: {
            title,
            description,
            organization,
            startDate,
            endDate,
            rules,
            gameName,
            thumbnailUrl,
        }
    });

    console.log("Tournament created: ", tournament)

    return NextResponse.json({ msg: "Tournament Created Successfully!!" });
}