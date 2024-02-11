import FormCreateOrg from "@/components/organization/form-create-org"
import CreateOrganisation from "@/components/organization/form-create-org"
import HeroHeader from "@/components/hero/heroheader"
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"


import {
    SignInButton,
    UserButton,
    currentUser
} from "@clerk/nextjs";
import OrganisationList from "@/components/organization/organization-list";
import CreateTournament from "@/components/tournaments/create-tournament";

const Tournaments = async () => {

    const user = await currentUser();
    console.log("User: ")
    console.log(user);

    return (
        <>
            {!user && (
                <div className="container h-screen flex flex-col gap-3 items-center justify-center">
                    <h1 className="text-xl font-semibold text-center">
                        You are not logges in please login to continue
                    </h1>
                    <SignInButton>
                        <Button size="sm" variant="primary">
                            Login
                        </Button>
                    </SignInButton>
                </div>
            )}

            {!!user && (
                <main className="bg-slate-950">
                    <HeroHeader />
                    <div className="container max-w-screen-2xl mx-auto ">
                        <Dialog>
                            <div className="flex justify-between items-center">
                                <h1 className=" text-2xl font-semibold my-3 mt-8">All Tournaments</h1>
                                <DialogTrigger className="btn btn-primary flex py-2 px-5 rounded-full bg-blue-500 gap-2 items-center justify-center"><FaPlus />Host Tournament</DialogTrigger>
                                <CreateTournament />
                            </div>
                        </Dialog>
                    </div>
                </main>
            )}
        </>
    )
}

export default Tournaments