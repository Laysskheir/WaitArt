import Image from "next/image";
import Link from "next/link";
import { PlusCircle, Trash } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
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

import { AddProject } from "@/components/modals/add-project";
import { db } from "@/lib/db";
import currentUser from "@/actions/current-user";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { DeleteProject } from "@/components/modals/delete-project";
import { ImageIcon } from "@radix-ui/react-icons";
import PhoneSideBar from "@/components/phone-side-bar";

export default async function Dashboard() {
  const user = await currentUser();
  // if (!user?.id) {
  //   redirect("/auth/login");
  // }

  const projects = await db.project.findMany({
    where: {
      userId: user?.id,
    },
  });

  return (
    <div className="flex min-h-screen w-full flex-col ">
      <div className="flex flex-col sm:gap-4 sm:py-4">
        <PhoneSideBar />
        <main className="grid flex-1 items-start gap-4 p-6 sm:px-8 sm:py-0 md:gap-8">
          <div className="flex items-center">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="ml-auto flex items-center gap-2">
              <AddProject data={projects}>
                <Button className="h-7 gap-1 p-4">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add project
                  </span>
                </Button>
              </AddProject>
            </div>
          </div>
          {projects.length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Projects</CardTitle>
                <CardDescription>
                  Manage your projects and view their sales performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Logo</TableHead>

                      <TableHead>Name</TableHead>

                      <TableHead className="hidden md:table-cell">
                        Created at
                      </TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id}>
                        <TableCell className="">
                          {project.logoUrl ? (
                            <Image
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="52"
                              src={project.logoUrl!}
                              width="52"
                            />
                          ) : (
                            <div className="bg-white w-12 h-12 flex justify-center items-center  rounded-lg">
                              <ImageIcon className="text-muted-foreground h-8 w-8" />
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="font-medium">
                          <Link href={`/dashboard/${project.id}`}>
                            {project.name}
                          </Link>
                        </TableCell>

                        <TableCell className="hidden md:table-cell">
                          {format(project.createdAt, "dd/M/yyyy")}
                        </TableCell>
                        <TableCell>
                          <DeleteProject projectId={project.id}>
                            <Button
                              variant="ghost"
                              className="hover:bg-destructive"
                              size="sm"
                            >
                              <Trash className="w-4 h-4" />
                            </Button>
                          </DeleteProject>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <Card className="min-h-[80vh] border-dashed flex items-center justify-center">
              <div className="flex flex-col items-center gap-1 text-center">
                <CardHeader className="text-3xl font-bold tracking-tight">
                  You dont have any projects yet
                </CardHeader>
                <CardFooter className="text-sm text-muted-foreground p-2 ">
                  Projects are forms for managing your waitlist. Customize and
                  create personalized forms on your website for visitors to sign
                  up easily.
                </CardFooter>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
}
