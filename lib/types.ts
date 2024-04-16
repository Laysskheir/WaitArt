// types.ts

export interface Project {
  id: string;
  userId: string;
  name: string;
  slug: string;
  websiteUrl?: string;
  logoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  submissions?: Submission[];
  setting?: Settings[];
}

export interface Settings {
  id: string;
  buttonColor?: string;
  buttonBorderColor?: string;
  buttonTextColor: string;
  bgColor?: string;
  borderWidthButton?: string;
  borderRadiusButton: string;
  fontWeight?: string;
  buttonText?: string;
  successMessage?: string;

  color?: string;
  borderColor?: string;
  headingTextColor?: string;
  signupTextColor?: string;
  borderWidthInput?: string;
  borderRadiusInput?: string;
  placeholderText?: string;
  heroText: string;
  suppText: string;
  project: Project;
}

export interface Submission {
  id: string;
  projectId: string;
  email: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
  project: Project;
}
