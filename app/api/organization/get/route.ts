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

export async function GET(req: Request,) {
    console.log("HELLOOO")
    console.log("REquest REcieved: ", req.body)
    //current user i.e. self
    const self = await getSelf();

    //get organization where the contact person is the current user
    const organization = await db.organization.findMany({
        where: {
            contactPerson: self.username
        }
    });

    return NextResponse.json({ organization, msg: "Organization created successfully" });
}