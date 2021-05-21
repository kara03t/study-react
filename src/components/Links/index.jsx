import classes from "src/components/Links/Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation →",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://nextjs.org/docs",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];
export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.title} href={item.href} className={classes.card}>
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
