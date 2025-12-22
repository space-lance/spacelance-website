import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | SpaceLance - AI, SaaS & Space-Tech Engineering",
  description: "End-to-end engineering services for AI product development, SaaS platforms, space-tech systems, cloud infrastructure, security, and analytics. Mission-critical solutions built for scale.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
