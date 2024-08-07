import { useTheme } from "next-themes";
import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, UserRoundSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const statuses = [
  "👋 Speak Freely",
  "🤐 Encrypted",
  "👍🏻 Free to chat",
  "👨🏼‍💻 Coding",
  "📴 Taking a break",
];

export const ProfileDialogContent = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <Card className="border-0 flex flex-col space-y-4">
        <CardTitle>Profile</CardTitle>
        <div>
          <Avatar className="h-20 w-20 mx-auto">
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </div>
      </Card>
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center space-x-2 mt-4">
          <UserRound />
          <Input
            disabled
            placeholder="Name"
            value={"USER NAME"}
            className="border-none outline-none ring-0"
          />
        </div>
        <Separator />
        <div className="flex items-center justify-center space-x-5">
          <p>Manage your Account</p>
          <button>USER BUTTON</button>
        </div>
        <Separator />
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center space-x-2">
              <UserRoundSearch />
              <p>Send Friend Request</p>
            </div>
          </DialogTrigger>
          <DialogContent></DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
