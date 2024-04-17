import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "./ui/textarea";

export function CardProjectsSkeleton() {
  const skeletonCount = 3;

  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-40 mb-2" /> 
        <Skeleton className="h-4 w-72" />
      </CardHeader>
      <CardContent>
        <table className="min-w-full before:bg-white/10 shadow-small">
          <tbody>
            {Array.from({ length: skeletonCount }).map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <Skeleton className="flex p-1 rounded-full w-12 h-12" />{" "}
                    {/* Skeleton for Logo */}
                    <div className="w-full flex flex-col gap-2">
                      <Skeleton className="h-3 w-full rounded-lg" />{" "}
                      {/* Skeleton for Name */}
                      <Skeleton className="h-3 w-4/5 rounded-lg" />{" "}
                      {/* Skeleton for Created at */}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Skeleton className="h-3 w-full rounded-lg" />{" "}
                  {/* Skeleton for Actions */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export function ChallengeDetailSkeleton() {
  return (
    <main className="max-w-7xl my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Area for Title and Description */}
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader className="text-4xl font-bold my-4">
            <Skeleton className="h-8 w-2/3 mb-2 rounded-lg" />
          </CardHeader>
          <CardContent>
            <h1 className="text-xl font-semibold mb-2">
              <Skeleton className="h-6 w-full rounded-lg" />
            </h1>
            <p className="text-gray-400">
              <Skeleton className="h-4 w-full rounded-lg" />
              <Skeleton className="h-4 w-5/6 mt-1 rounded-lg" />
              <Skeleton className="h-4 w-3/4 mt-1 rounded-lg" />
            </p>
          </CardContent>
        </Card>

        {/* Right Area with Input and Output Sections */}
        <div className="col-span-1 lg:col-span-1">
          <div className="mb-8">
            <div>
              {/* Top Area for Input */}
              <Card className="mb-4">
                <CardHeader className="text-xl font-semibold mb-2">
                  <Skeleton className="h-8 w-2/3 rounded-lg" />
                </CardHeader>
                <CardContent>
                  <Textarea className="w-full" />
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-4">
                      <div color="danger" className="group">
                        <Skeleton className="h-5 w-5 rounded-lg" />
                      </div>

                      <div>
                        <Skeleton className="h-5 w-5 rounded-lg" />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div color="secondary" className="group">
                        <Skeleton className="h-5 w-5 rounded-lg" />
                      </div>
                    </div>
                  </CardFooter>
                </CardContent>
              </Card>

              {/* Bottom Area for Output */}
              <Card className="">
                <CardHeader className="text-xl font-semibold mb-2">
                  <Skeleton className="h-8 w-2/3 rounded-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <p>
                    <Skeleton className="h-4 w-full rounded-lg" />
                  </p>
                  <p className="italic text-gray-400">
                    <Skeleton className="h-4 w-full rounded-lg" />
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
