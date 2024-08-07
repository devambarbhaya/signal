import { useTheme } from "next-themes";
import { Card, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Handshake,
  Laptop,
  Moon,
  Pencil,
  Sun,
  UserRound,
  UserRoundSearch,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const statuses = [
  "👋 Speak Freely",
  "🤐 Encrypted",
  "👍🏻 Free to chat",
  "👨🏼‍💻 Coding",
  "📴 Taking a break",
];

const addFriendFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email(),
});

export const ProfileDialogContent = () => {
  const { setTheme } = useTheme();
  const [updateStatusDialog, setUpdateStatusDialog] = useState(false);
  const [status, setStatus] = useState("");
  const form = useForm<z.infer<typeof addFriendFormSchema>>({
    resolver: zodResolver(addFriendFormSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = async ({ email }: z.infer<typeof addFriendFormSchema>) => {
    console.log(email);
  };

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
          <DialogContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={true}
                          placeholder="friend@email.com"
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your friend&apos;s email to send a friend request
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={true} type="submit">
                  Submit
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <Separator />
        <Dialog>
          <DialogTrigger>
            <div className="flex items-center space-x-2">
              <Handshake />
              <p>View Friend Requests</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <p className="text-xl text-center font-bold">
              No friend requests yet
            </p>
          </DialogContent>
        </Dialog>
        <Separator />
        <Dialog
          open={updateStatusDialog}
          onOpenChange={() => setUpdateStatusDialog(!updateStatusDialog)}
        >
          <DialogTrigger>
            <div className="flex items-center space-x-2">
              <Pencil />
              <p>{"Display Current Status"}</p>
            </div>
          </DialogTrigger>
          <DialogContent>
            <Textarea
              placeholder="Current status"
              className="resize-none h-48"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <div>
              {statuses.map((status) => (
                <p
                  key={status}
                  onClick={() => setStatus(status)}
                  className="px-2 py-3 hover:bg-gray-100 hover:dark:bg-gray-700 rounded-md cursor-pointer"
                >
                  {status}
                </p>
              ))}
            </div>
            <Button
              disabled={true}
              type="button"
              className="ml-auto w-fit bg-primary-main"
            >
              Update Status
            </Button>
          </DialogContent>
        </Dialog>
        <Separator />
        <ToggleGroup type="single" variant="outline" className="space-x-4">
          <ToggleGroupItem
            value="light"
            className="flex space-x-3"
            onClick={() => setTheme("light")}
          >
            <Sun />
            <p>Light</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="dark"
            className="flex space-x-3"
            onClick={() => setTheme("dark")}
          >
            <Moon />
            <p>Dark</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="system"
            className="flex space-x-3"
            onClick={() => setTheme("system")}
          >
            <Laptop />
            <p>System</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
