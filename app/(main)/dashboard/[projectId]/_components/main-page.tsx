"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MainHeader from "@/components/main/main-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { PhoneIcon, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { defaultFormValues } from "@/data/defaultValues";
import { FormSchema } from "@/data/formSchema";
import { people } from "@/data/people";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { themeOptions } from "@/data/themes";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";

// interface MainPageProps {
//   projectId: string;
//   projectSlug: string;
//   initialData: Settings[];
// }
export default function MainPage({
  projectId,
  projectSlug,
  initialData,
  logoUrl,
}: any) {
  const initialDataItem = initialData?.[0];
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ...defaultFormValues,
      ...initialDataItem,
    },
  });
  const router = useRouter();
  

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      await axios.patch(`/api/projects/${projectId}/settings`, values);
      toast({
        title: "Changes saved",
      });
      router.refresh();
    } catch {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem when save changes.",
      });
    }
  };

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4">
      <MainHeader projectId={projectId} projectSlug={projectSlug} />
      <main className="grid  flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid  auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          {/* content */}
          <Card
            style={{
              backgroundColor: form.watch().bgColor,
            }}
            className="h-[580px] flex justify-center items-center"
          >
            <CardContent>
              <div className="max-w-xl mx-auto p-6 flex flex-col justify-center items-center">
                {logoUrl.logoUrl ? (
                  <img
                    src={logoUrl.logoUrl}
                    alt="Logo"
                    className="w-24 h-24 mr-2 mb-4"
                  />
                ) : (
                  <></>
                )}

                <div
                  className="text-center"
                  style={{
                    color: form.watch().headingTextColor,
                  }}
                >
                  <h1 className="text-3xl  font-bold mb-4">
                    {form.watch().heroText}
                  </h1>
                  <p className="text-sm  mb-6 text-center">
                    {form.watch().subText}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder={form.watch().placeholderText}
                    className={`flex-grow md:w-80 rounded-${
                      form.watch().borderRadiusInput
                    }`}
                    style={{
                      backgroundColor: form.watch().color,
                      borderColor: form.watch().borderColor,
                    }}
                  />
                  <Button
                    className={`w-full md:w-auto rounded-${
                      form.watch().borderRadiusButton
                    }  font-${form.watch().fontWeight}`}
                    style={{
                      backgroundColor: form.watch().buttonColor,
                      color: form.watch().buttonTextColor,
                      borderColor: form.watch().buttonBorderColor,
                      borderWidth: form.watch().borderWidthButton,
                    }}
                  >
                    {form.watch().buttonText}
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  {people.map((person) => (
                    <div
                      key={person.id}
                      className="flex flex-col mt-6  -ml-1 items-center justify-center "
                    >
                      <img
                        src={person.image}
                        alt="image"
                        className="rounded-full h-10 w-10 border-2 group-hover:scale-105 group-hover:z-30 border-white  "
                      />
                    </div>
                  ))}
                  {form.watch().socialProof && (
                    <p className="mt-4 ml-4">
                      <span className="font-semibold">Be the first</span> to
                      join
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <ScrollArea className="h-[580px]">
          <Card className="overflow-hidden">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <Button className="h-8 gap-1">
                    <Save className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Save Changes
                    </span>
                  </Button>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-sm">
                  <div className="max-w-sm mx-auto p-2">
                    <div className="space-y-4">
                      <Tabs defaultValue="general">
                        <TabsList className="grid w-full grid-cols-3">
                          <TabsTrigger value="general">General</TabsTrigger>
                          <TabsTrigger value="input">Input</TabsTrigger>
                          <TabsTrigger value="themes">Themes</TabsTrigger>
                        </TabsList>

                        {/* general tab */}
                        <TabsContent value="general">
                          <div className="mt-4">
                            <div className="flex flex-col  space-y-4">
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Button Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="buttonColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="button-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Button Border Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="buttonBorderColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="button-border-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Button Text Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="buttonTextColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="button-text-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>BG Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="bgColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="bg-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Border Radius</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="borderRadiusButton"
                                  render={({ field }) => (
                                    <FormItem>
                                      <Select onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="Medium" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                          <SelectItem value="none">
                                            None
                                          </SelectItem>
                                          <SelectItem value="sm">
                                            Small
                                          </SelectItem>
                                          <SelectItem value="md">
                                            Medium
                                          </SelectItem>
                                          <SelectItem value="lg">
                                            Large
                                          </SelectItem>
                                          <SelectItem value="full">
                                            Full
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Border Width</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="borderWidthButton"
                                  render={({ field }) => (
                                    <FormItem>
                                      <Select onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="0px" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                          <SelectItem value="0px">
                                            0px
                                          </SelectItem>
                                          <SelectItem value="2px">
                                            2px
                                          </SelectItem>
                                          <SelectItem value="4px">
                                            4px
                                          </SelectItem>
                                          <SelectItem value="8px">
                                            8px
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Font Weight</FormLabel>
                                <FormItem>
                                  <FormField
                                    control={form.control}
                                    name="fontWeight"
                                    render={({ field }) => (
                                      <Select onValueChange={field.onChange}>
                                        <SelectTrigger className="w-[120px]">
                                          <SelectValue
                                            {...field}
                                            placeholder="Normal"
                                          />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                          <SelectItem value="thin">
                                            Thin
                                          </SelectItem>
                                          <SelectItem value="normal">
                                            Normal
                                          </SelectItem>
                                          <SelectItem value="bold">
                                            Bold
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                    )}
                                  />
                                </FormItem>
                              </div>

                              <div className="space-y-4">
                                <div className="flex flex-col space-y-1.5">
                                  <FormField
                                    control={form.control}
                                    name="buttonText"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="text-xs">
                                          Button Text
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            placeholder="Join the waitlist"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                  <FormField
                                    control={form.control}
                                    name="successMessage"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel className="text-xs">
                                          Success Message
                                        </FormLabel>
                                        <FormControl>
                                          <Input
                                            type="text"
                                            placeholder="Success! You're on the waitlist 🎉"
                                            {...field}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                                <div className="flex items-center justify-between space-x-2">
                                  <FormLabel className="text-xs ">
                                    Show Social Proof
                                  </FormLabel>
                                  <FormField
                                    control={form.control}
                                    name="socialProof"
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        {/* input tab */}
                        <TabsContent value="input">
                          <div className="mt-4">
                            <div className="flex flex-col space-y-1.5">
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="color"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Border</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="borderColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="border-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Heading Text Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="headingTextColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="heading-text-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Signup Text Color</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="signupTextColor"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <Input
                                          className="w-12"
                                          id="signup-text-color"
                                          type="color"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Border Radius</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="borderRadiusInput"
                                  render={({ field }) => (
                                    <FormItem>
                                      <Select onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="0px" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                          <SelectItem value="none">
                                            None
                                          </SelectItem>
                                          <SelectItem value="sm">
                                            Small
                                          </SelectItem>
                                          <SelectItem value="md">
                                            Medium
                                          </SelectItem>
                                          <SelectItem value="lg">
                                            Large
                                          </SelectItem>
                                          <SelectItem value="full">
                                            Full
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div className="flex items-center justify-between space-x-2">
                                <FormLabel>Border Width</FormLabel>
                                <FormField
                                  control={form.control}
                                  name="borderWidthInput"
                                  render={({ field }) => (
                                    <FormItem>
                                      <Select onValueChange={field.onChange}>
                                        <FormControl>
                                          <SelectTrigger className="w-[120px]">
                                            <SelectValue placeholder="0px" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent position="popper">
                                          <SelectItem value="0px">
                                            0px
                                          </SelectItem>
                                          <SelectItem value="2px">
                                            2px
                                          </SelectItem>
                                          <SelectItem value="4px">
                                            4px
                                          </SelectItem>
                                          <SelectItem value="8px">
                                            8px
                                          </SelectItem>
                                        </SelectContent>
                                      </Select>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                              <div>
                                <FormField
                                  control={form.control}
                                  name="placeholderText"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Placeholder Text</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          placeholder="Enter placeholder text"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="heroText"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Hero Text</FormLabel>
                                      <FormControl>
                                        <Input
                                          type="text"
                                          placeholder="Enter hero text"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="subText"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Sub Text</FormLabel>
                                      <FormControl>
                                        <Textarea
                                          placeholder="Enter sub text"
                                          className="resize-none"
                                          {...field}
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </TabsContent>

                        {/* Themes tab */}
                        <TabsContent value="themes">
                          <div className="mt-4">
                            <div className="p-4">
                              <div className="">
                                <FormField
                                  control={form.control}
                                  name="theme"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormControl>
                                        <RadioGroup
                                          defaultValue="default"
                                          className="grid grid-col-2 gap-3"
                                        >
                                          {themeOptions.map((theme) => (
                                            <div key={theme.id}>
                                              <RadioGroupItem
                                                value={theme.id}
                                                id={theme.id}
                                                className="peer sr-only"
                                              />
                                              <Label
                                                className={`flex cursor-pointer flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground ${
                                                  field.value === theme.id
                                                    ? "border-white"
                                                    : ""
                                                }`}
                                                onClick={() => {
                                                  // Set the selected theme values to the form fields
                                                  Object.entries(theme).forEach(
                                                    ([key, value]: any) => {
                                                      form.setValue(key, value);
                                                    }
                                                  );
                                                }}
                                              >
                                                <div className="flex flex-col items-center space-y-2 mb-3">
                                                  <Skeleton
                                                    className="h-10 w-10 rounded-full "
                                                    style={{
                                                      backgroundColor:
                                                        theme.buttonColor,
                                                    }}
                                                  />
                                                  <div className="space-y-2">
                                                    <Skeleton
                                                      className="h-4 w-[150px] "
                                                      style={{
                                                        backgroundColor:
                                                          theme.bgColor,
                                                      }}
                                                    />
                                                    <Skeleton
                                                      className="h-4 w-[150px] "
                                                      style={{
                                                        backgroundColor:
                                                          theme.headingTextColor,
                                                      }}
                                                    />
                                                  </div>
                                                </div>

                                                <p className="text-white/60">
                                                  {theme.name}
                                                </p>
                                              </Label>
                                            </div>
                                          ))}
                                        </RadioGroup>
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
              </form>
            </Form>
          </Card>
        </ScrollArea>
      </main>
    </div>
  );
}
