import { Activity } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircledIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { db } from "@/lib/db";
import { format } from "date-fns";

export default async function Submissions({
  params,
}: {
  params: { projectId: string };
}) {
  const submissions = await db.submission.findMany({
    where: {
      projectId: params.projectId,
    },
  });

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Signups
              </CardTitle>
              <HeartFilledIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardFooter>
              <div className="text-3xl font-bold">{submissions.length}</div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Verified Signups
              </CardTitle>
              <CheckCircledIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{submissions.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Referrals
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-muted-foreground">Coming Soon..</div>
            </CardContent>
          </Card>
        </div>
        {submissions.length > 0 ? (
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Submissions</CardTitle>
                  <CardDescription>
                    Recent submissions from your waitlist.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Verified</TableHead>
                      <TableHead className="text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="font-medium">
                          {submission.email}
                        </TableCell>
                        <TableCell className="font-medium">
                          {submission.verified ? "yes" : "no"}
                        </TableCell>
                        <TableCell className="text-right">
                          {format(submission.createdAt, "dd/M/yyyy")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <div className="flex flex-col items-center gap-1 text-center">
              <CardHeader className="text-3xl font-bold tracking-tight">
                No submissions yet
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground w-1/2">
                Submissions are entries from visitors who sign up on your
                waitlist. They represent interested individuals and help manage
                communication.
              </CardContent>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
