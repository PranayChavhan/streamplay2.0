import FormCreateOrg from "@/components/organization/form-create-org"
import CreateOrganisation from "@/components/organization/form-create-org"
import HeroHeader from "@/components/hero/heroheader"
import { Button } from "@/components/ui/button";
import {
    SignInButton,
    UserButton,
    currentUser
} from "@clerk/nextjs";
import OrganisationList from "@/components/organization/organization-list";

const OrganisationRegs = async () => {

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
                <main className="bg-slate-900">
                    <HeroHeader />
                    <div className="container max-w-screen-2xl mx-auto ">
                        <OrganisationList />
                        <FormCreateOrg />
                    </div>
                </main>
            )}
        </>
    )
}

export default OrganisationRegs