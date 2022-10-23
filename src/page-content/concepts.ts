type ConceptSection = {
  name: string
  description: string
  conceptAreas: Concept[]
}

type Concept = {
  name: string
  description?: string
  url?: string
}

export const ConceptSections: ConceptSection[] = [
  {
    name: "Epistemology and Science",
    description: "small text about the conecpt",
    conceptAreas: [
      {
        name: "The growth of human knowledge",
        description:
          "How does human knowledge grow?, How do we know what we know?",
      },
      {
        name: "The science of science",
        description: "How does science work?",
      },
    ],
  },
  {
    name: "Politics and Decision Making",
    description:
      "Progress is enabled through error correction; the removal of bad, options, leaders and rules. Critical Rationalism is highly aligned with Libertarianism",
    conceptAreas: [
      {
        name: "The problem of political authority",
      },
      {
        name: "The Open Society and Its Enemies",
        url: "https://en.wikipedia.org/wiki/The_Open_Society_and_Its_Enemies",
      },
    ],
  },
  {
    name: "Taking Children Seriously",
    description:
      "Taking Children Seriously is a parenting movement and educational philosophy whose central idea is that it is possible and desirable to raise and educate children without either doing anything to them against their will or making them do anything against their will.",
    conceptAreas: [
      {
        name: "Why behaviorism is wrong for people.",
      },
      {
        name: "How will credential-less children survive?",
        url: "https://www.takingchildrenseriously.com/how-will-credential-less-children-survive/",
      },
      {
        name: "How do you raise a child to believe in freedom?",
        url: "https://www.takingchildrenseriously.com/how-do-you-raise-a-child-to-believe-in-freedom/",
      },
      {
        name: "What matters is the presence of a mind, not the size of the person.",
      },
    ],
  },
  {
    name: "Memes",
    description:
      "Memes are ideas that spread from person to person, and from culture to culture.",
    conceptAreas: [
      {
        name: "Rational and Anti-Rational Memes",
      },
      {
        name: "Memes in Static and Dynamic Societies",
      },
    ],
  },
]
