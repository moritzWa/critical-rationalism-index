import * as React from "react"

type ConceptSection = {
  name: string
  description: string | React.ReactNode
  conceptAreas: Concept[]
}

type Concept = {
  name: string
  description?: string | React.ReactNode
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
    description: (
      <>
        Political progress happens via the removal of bad, options, leaders and
        rules. Critical Rationalism is highly aligned with{" "}
        <a href="https://plato.stanford.edu/entries/libertarianism/">
          Libertarianism
        </a>
        .
      </>
    ),
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
        name: "What is an open society and what are its enemies?",
        description: (
          <>
            In his book{" "}
            <a href="https://en.wikipedia.org/wiki/The_Open_Society_and_Its_Enemies">
              The Open Society and Its Enemies
            </a>
            , Karl Popper argued that the
          </>
        ),
      },
    ],
  },
  {
    name: "Progress and Innovation",
    description: "About technological, moral, and political progress",
    conceptAreas: [
      {
        name: "How does innovation lead to more Inspiration?",
      },
      {
        name: "How can we Formalize progress?",
        description: (
          <>
            David Deutsch writes about two deep principles: The{" "}
            <a href="https://www.youtube.com/watch?v=oqtfB91i7Uw">
              Principle of Optimism
            </a>{" "}
            says that <i>All evils are caused by insufficient knowledge</i>. The
            momentous dichotomy says that 'Either a given technology is
            possible, or else there must be some reason (say, of physics or
            logic) why it isn’t possible.'
          </>
        ),
      },
    ],
  },
  {
    name: "Taking Children Seriously",
    description:
      "Taking Children Seriously is a parenting movement and educational philosophy whose central idea is that it is possible and desirable to raise and educate children without either doing anything to them against their will or making them do anything against their will.",
    conceptAreas: [
      {
        name: "Why is behaviorism wrong for people?",
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
        name: "Why do children lack fundamental rights?",
        description:
          "What matters is the presence of a mind, not the size of the person.",
      },
    ],
  },
  {
    name: "Art and Psychology",
    description:
      "We're still at the beginning of unifying existing concepts of psychology with Critical Rationalism.",
    conceptAreas: [
      {
        name: "Is beauty objective? What is the origin of aesthetics?",
        description: (
          <>
            David Deutch wrote about this in The beginning of Infinity, Why are
            flowers beautiful? and in his{" "}
            <a href="https://www.nature.com/articles/526S16a">
              Interview in Nature
            </a>
          </>
        ),
      },
      {
        name: "What is Fun? The Fun Criterion",
        description: (
          <>
            Fun is when ideas affect each other (by evolution). Lulie Tannett
            interviewed David Deutsch about his explanaiton{" "}
            <a href="https://www.youtube.com/watch?v=idvGlr0aT3c">here</a>.
          </>
        ),
      },
    ],
  },
  {
    name: "Memes",
    description: (
      <>
        Memes are ideas that spread from person to person, and from culture to
        culture. David Deutsch, in The Beginning of Infinity, expanded on and
        corrected parts of Susan Blackmore's{" "}
        <a href="https://www.goodreads.com/book/show/254502.The_Meme_Machine">
          The Meme Machine
        </a>
        .
      </>
    ),
    conceptAreas: [
      {
        name: "What are Rational and Anti-Rational Memes?",
      },
      {
        name: "How do memes create Static and Dynamic Societies?",
      },
    ],
  },
  {
    name: "Computer Science and AI",
    description: (
      <>

      </>)
    ,
    conceptAreas: [
      {
        name: "What are arbstractions? Do they exist in reality?"
      },
      {
        name: "What are the limitations of the turing test?",
        description: (
          <>
            David Deutsch expanded on this and other criticisms of the current AGI research in <a href='http://www.daviddeutsch.org.uk/wp-content/uploads/2019/07/PossibleMinds_Deutsch.pdf'>Possible Minds</a> (edited by John Brockman) and in his article <a href='https://aeon.co/essays/how-close-are-we-to-creating-artificial-intelligence'>Creative blocks</a> published on Aeon.
          </>
        ),
      },
      {
        name: "How can we formalize the evolution of knowledge by conjecture and criticism?",
        description: (
          <>
            The AGI researcher Ella Hoeppner has proposed something that she calls <a href='https://www.ellahoeppner.com/ctp-theory-a-critical-rationalist-approach-to-agi/'>Claim-Theory-Problem Theory (CTP Theory)</a>.
          </>
        )
      }
    


  },
]
