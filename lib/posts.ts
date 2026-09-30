export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
};

export const seedPosts: Post[] = [
  {
    id: "1",
    slug: "making-room-for-better-ideas",
    title: "Making room for better ideas",
    excerpt: "A small field guide to clearing the noise, keeping a notebook, and letting the good work arrive slowly.",
    body: [
      "The best ideas rarely arrive with a notification. They tend to show up in the quiet spaces between one thing and the next: on a walk, at the edge of a page, while washing a cup.",
      "This is not an argument for doing less forever. It is an argument for leaving a little air around the things that matter. When every minute is filled, even a good idea has nowhere to land.",
      "Try keeping one small place for unfinished thoughts. No sorting, no scoring, no pressure to make the note useful. Return to it when you have the attention. The work gets better when it has somewhere patient to begin.",
    ],
    category: "Notes",
    author: "Tejas",
    date: "Sep 18, 2025",
    readTime: "4 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "the-case-for-small-websites",
    title: "The case for small websites",
    excerpt: "Why a focused corner of the internet can feel more useful than a feed built to keep you scrolling.",
    body: [
      "A small website has a different rhythm. It can be specific instead of universal, personal instead of optimized, and finished enough to be shared without becoming a product roadmap.",
      "The constraints are a feature. A short about page, a few thoughtful links, and a handful of posts can tell someone more than a busy homepage ever could.",
      "Build the corner you wish existed. Give it a clear door, a comfortable chair, and one good reason to come back.",
    ],
    category: "Web craft",
    author: "Tejas",
    date: "Sep 09, 2025",
    readTime: "3 min read",
  },
  {
    id: "3",
    slug: "a-weekend-without-a-plan",
    title: "A weekend without a plan",
    excerpt: "On wandering, collecting small details, and remembering that curiosity does not need a deliverable.",
    body: [
      "A blank weekend can feel strangely loud at first. Without a list, the mind keeps reaching for one. Give it a little time and the volume changes.",
      "Take the long way to the market. Read the menu you do not understand. Notice which windows catch the afternoon. Curiosity is a form of attention, and attention is a way of being here.",
    ],
    category: "Field notes",
    author: "Tejas",
    date: "Aug 27, 2025",
    readTime: "2 min read",
  },
];

let localPosts = [...seedPosts];

export function getPosts() {
  return localPosts;
}

export function getPost(slug: string) {
  return localPosts.find((post) => post.slug === slug);
}

export function addPost(post: Post) {
  localPosts = [post, ...localPosts];
  return post;
}

export function removePost(id: string) {
  localPosts = localPosts.filter((post) => post.id !== id);
}
