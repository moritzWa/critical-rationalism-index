// Resources
type Resource = {
  name: string
  authors: [keyof typeof People]
  description: string
  href: string
  type: ResourceType
}

enum ResourceType {
  book = "book",
}

export const Resources: Resource[] = [
  {
    name: "The Beginning of Infinity: Explanations That Transform the World",
    authors: ["David Deutsch"],
    description:
      "This is a book by a noted quantum physicist discussing epistemology, the nature of reality, and human progress.",
    href: "https://en.wikipedia.org/wiki/The_Beginning_of_Infinity",
    type: ResourceType.book,
  },
  // The Logic of Scientific Discovery
  {
    name: "The Logic of Scientific Discovery",
    authors: ["Karl Popper"],
    description:
      "This is a book by a noted philosopher discussing the nature of scientific discovery.",
    href: "https://en.wikipedia.org/wiki/The_Logic_of_Scientific_Discovery",
    type: ResourceType.book,
  },
  {
    name: "Failure: Why Science Is So Successful",
    authors: ["Stuart Firestein"],
    description:
      "This is a book by a noted biologist discussing the nature of scientific discovery.",
    href: "https://en.wikipedia.org/wiki/Failure:_Why_Science_Is_So_Successful",
    type: ResourceType.book,
  },
]

// People

type PeopleTypes = {
  name: string
  description: string
  websiteURL?: string
  twitterURL?: string
  died?: string
}

export const People = {
  "David Deutsch": {
    name: "David Deutsch",
    description:
      "David Elieser Deutsch FRS is a British physicist at the University of Oxford. He is a Visiting Professor in the Department of Atomic and Laser Physics at the Centre for Quantum Computation in the Clarendon Laboratory of the University of Oxford.",
    websiteURL: "http://www.daviddeutsch.org.uk/h",
    twitterURL: "https://twitter.com/DavidDeutschOxf",
  } as PeopleTypes,
  "Karl Popper": {
    name: "Karl Popper",
    description:
      "Karl Raimund Popper was an Austrian-British philosopher and professor. He is generally regarded as one of the 20th century's greatest philosophers of science.",
    websiteURL: "https://en.wikipedia.org/wiki/Karl_Popper",
    died: "1994-09-17",
  } as PeopleTypes,
  "Brett Hall": {
    name: "Brett Hall",
    description:
      "Brett Hall is based in Australia and the creator of ToKCast, a podcast largely about the work of David Deutsch.",
    websiteURL: "https://www.bretthall.org/",
    twitterURL: "https://twitter.com/tokteacher/",
  } as PeopleTypes,
  "Peter Medawar": {
    name: "Peter Medawar",
    description:
      "Peter Brian Medawar FRS was a British immunologist and Nobel laureate. He was a professor at the University of Oxford and a Fellow of All Souls College, Oxford.",
    websiteURL: "https://en.wikipedia.org/wiki/Peter_Medawar",
    died: "1987-11-02",
  } as PeopleTypes,
  "Naval Ravikant": {
    name: "Naval Ravikant",
    description:
      "Naval Ravikant is an Indian-American entrepreneur, investor, and author. He is the co-founder and CEO of AngelList and Spearhead",
    websiteURL: "https://nav.al/",
    twitterURL: "https://twitter.com/naval",
  } as PeopleTypes,
  "Aaron Stupple": {
    name: "Aaron Stupple",
    description:
      "Aaron Stupple is the founder of Conjecture Magazine which applies critical rationalism to contemporary issues and the nature of progress. Aaron is an internal medicine physician in Massachusetts.",
    twitterURL: "https://twitter.com/astupple",
  } as PeopleTypes,
  "Logan Chipkin": {
    name: "Logan Chipkin",
    description:
      "Logan Chipkin is a writer in Philadelphia. His previous publications can be found on his website. He is also working on a fiction novel, chapters of which can be found on his Substack.",
    websiteURL: "http://www.loganchipkin.com/",
  } as PeopleTypes,
  "Dennis Hackethal": {
    name: "Dennis Hackethal",
    description:
      "Dennis Hackethal is a philosopher and software engineer. His book A Window on Intelligence is aimed at the general reader and covers artificial general intelligence, the evolution of people, AI safety, and more.",
    websiteURL: "https://blog.dennishackethal.com/",
    twitterURL: "https://twitter.com/dchackethal",
  } as PeopleTypes,
  "Ella Hoeppner": {
    name: "Ella Hoeppner",
    description:
      "Ella Hoeppner is a software engineer with an interest in epistemology, artificial general intelligence, and artificial life. She writes at FourStrands.org and at her website.",
    websiteURL: "https://www.ellahoeppner.com/",
    twitterURL: "https://twitter.com/ella_hoeppner",
  } as PeopleTypes,
  "Bruce Nielson": {
    name: "Bruce Nielson",
    description:
      "Bruce Nielson runs FourStrands.org and hosts the Theory of Anything podcast. Both explore subjects related to David Deutsch's 'Four Strands'.",
    websiteURL: "https://fourstrands.org/",
    twitterURL: "https://twitter.com/bnielson01",
  } as PeopleTypes,
  "Lulie Tannett": {
    name: "Lulie Tannett",
    description:
      "Lulie Tanett is a writer from Oxford, England, specialising in applied critical rationalism. She writes about all things epistemology — from education and memetics, to productivity and motivation, to how coercion affects rationality, progress and happiness.'",
    websiteURL: "https://reasonisfun.com/",
  } as PeopleTypes,
  "Christofer Lövgren": {
    name: "Christofer Lövgren",
    description: "Christofer Lövgren is running the Do Explain podcast.",
    twitterURL: "https://twitter.com/ReachChristofer",
  } as PeopleTypes,
  "Ben Chugg": {
    name: "Ben Chugg",
    description:
      "Ben is a computer scientist at Stanford Law School, mostly working on sequential decision-making problems. He has done work in optimization, complexity theory, graph theory, and machine learning and is co-host of the Increments podcast.",
    websiteURL: "https://www.incrementspodcast.com/",
    twitterURL: "https://twitter.com/BennyChugg",
  } as PeopleTypes,
  "Vaden Masrani": {
    name: "Vaden Masrani",
    description:
      "Vaden is a Ph.D student at the University of British Columbia where he focuses on machine learning, probabilistic programming, bayesian inference and other topics. He's also the co-host of the Increments podcast.",
    websiteURL: "https://vmasrani.github.io/",
    twitterURL: "https://twitter.com/VadenMasrani",
  } as PeopleTypes,
  "Stuart Firestein": {
    name: "Stuart Firestein",
    description:
      "Stuart Firestein is a professor of biology at Columbia University. He is the author of Failure: Why Science Is So Successful.",
    websiteURL: "http://stuartfirestein.com/",
  } as PeopleTypes,
}

// Sources

enum SourceType {
  podcast = "podcast",
  blog = "blog",
}

type Source = {
  name: string
  type: SourceType
  href: string
  authors: (keyof typeof People)[]
}

// Note, if you add an Author here pls make sure you add them to the People object above
export const Sources: Source[] = [
  {
    name: "ToKCast",
    type: SourceType.podcast,
    href: "https://brettroberthall.podbean.com/",
    authors: ["Brett Hall"],
  },
  {
    name: "Conjecture Magazine",
    type: SourceType.blog,
    href: "https://medium.com/conjecture-magazine",
    authors: ["Aaron Stupple"],
  },
  {
    name: "The Four Strands",
    type: SourceType.blog,
    href: "https://fourstrands.org/",
    authors: ["Bruce Nielson"],
  },
  {
    name: "Theory of Anything podcast",
    type: SourceType.podcast,
    href: "https://anchor.fm/four-strands",
    authors: ["Bruce Nielson"],
  },
  {
    name: "Do Explain podcast",
    type: SourceType.podcast,
    href: "https://doexplain.buzzsprout.com/",
    authors: ["Christofer Lövgren"],
  },
  {
    name: "Increments podcast",
    type: SourceType.podcast,
    href: "https://www.incrementspodcast.com/",
    authors: ["Ben Chugg", "Vaden Masrani"],
  },
]
