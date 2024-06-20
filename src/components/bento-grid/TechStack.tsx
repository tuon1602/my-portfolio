import IconCloud from "../ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "sonarqube",
  "figma",
];

export default function TeckStack() {
  return (
    <div className="relative flex h-fit w-[50%] items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
