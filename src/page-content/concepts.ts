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

// https://docs.google.com/drawings/d/1Ub_IInn_iBWleQ9iwCGkRAMK3iHTjuhTHm_6422dhds/edit?usp=sharing

export const ConceptSections: ConceptSection[] = [
  {
    name: "Epistemology and Science",
    description:
      "At its core, Critical Rationalism is a theory about knowledge creation and error correction.",
    conceptAreas: [
      {
        name: "How does human knowledge grow?",
        description:
          "How does human knowledge grow? How do we know what we know?",
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
      "Political progress happens via the removal of bad, options, leaders and rules. Critical Rationalism is highly aligned with Libertarianism",
    conceptAreas: [
      {
        name: "How do we make the best decisions?",
        description:
          "Decision Making without justificationsm is choosing the option associated with our best explanation.",
      },
      {
        name: "How can we live together without coercion?",
        description:
          "The problem of political authority is the problem of how to justify the authority of the state.",
      },
      {
        name: "The Open Society and Its Enemies",
        url: "https://en.wikipedia.org/wiki/The_Open_Society_and_Its_Enemies",
      },
    ],
  },
  {
    name: "Progress and Innovation",
    description: "About technological, moral, and political progress",
    conceptAreas: [
      {
        name: "Innovation and Inspiration.",
      },
      {
        name: "Formalizing progress",
        description:
          "David Deutsch writes about two deep principles. The principle of Optimism says that All evils are caused by insufficient knowledge. The momentous dichotomy says that 'Either a given technology is possible, or else there must be some reason (say, of physics or logic) why it isn’t possible.'",
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
      {
        name: "The oppression and lack of rights of children.",
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
