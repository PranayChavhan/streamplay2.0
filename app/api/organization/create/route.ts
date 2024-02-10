//Routes to create the organization
import { headers } from 'next/headers';

import { db } from '@/lib/db';
import { getSelf } from "@/lib/auth-service";
import { NextResponse } from 'next/server';

// id            String    @id @default(uuid())
// name          String
// description   String
// imageUrl      String?   @db.Text
// email         String?   @unique
// location      String?
// foundingDate  DateTime?
// contactPerson String?

export async function POST(req: Request, res: Response) {
    console.log("HELLOOO")
    console.log("REquest REcieved: ", req.body)
    //current user i.e. self
    const self = await getSelf();

    //create new organization
    const { name, description, imageUrl, email, location, foundingDate } = await req.json();

    //create organization
    const organization = await db.organization.create({
        data: {
            name,
            description,
            imageUrl,
            email,
            location,
            foundingDate,
            contactPerson: self.username,
        }
    });

    console.log("Organization created: ", organization)

    return NextResponse.json({ organization, msg: "Organization created successfully" });
}