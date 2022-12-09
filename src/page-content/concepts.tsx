import * as React from "react"

type ConceptSection = {
  name: string
  description: string | React.ReactNode
  conceptAreas: Concept[]
}

type Concept = {
  name: string | React.ReactNode
  description?: string | React.ReactNode
  url?: string
}

// inspiration for concept map: https://docs.google.com/drawings/d/1Ub_IInn_iBWleQ9iwCGkRAMK3iHTjuhTHm_6422dhds/edit?usp=sharing

// Please keep every section as short as possible. The purpose of this is to create curiosity and not to explain.

export const ConceptSections: ConceptSection[] = [
  {
    name: "What is critical rationalism?",
    description:
      "A theory of knowledge developed by Karl Popper that is both enormously powerful and tragically underappreciated. Of all of the possible ways in which the world may be transformed, the overwhelming majority of them require the presence of knowledge to be rendered.",
    conceptAreas: [
      {
        name: "Is knowledge ever justified by an authority?",
        description: (
          <>
            When someone claims a fact is true, one can always ask for a reason.
            At some point, an{" "}
            <a href="https://atmos.washington.edu/academics/classes/2003Q4/211/articles_required/Popper60_knowledge.pdf">
              authority
            </a>{" "}
            may block discussion by arbitrarily declaring the question settled.
            The opposite of authority is fallibility.
          </>
        ),
      },
      {
        name: (
          <>
            Can’t we say that something is{" "}
            <a href="https://www.daviddeutsch.org.uk/2014/08/simple-refutation-of-the-bayesian-philosophy-of-science/">
              probably justified
            </a>{" "}
            when there is sufficient evidence?
          </>
        ),
        description:
          "What counts as evidence can only be understood in terms of theories - evidence is never ‘theory-free’. Evidence is a criticism of theories, not a justification for accepting them as true.",
      },
      {
        name: (
          <>
            How do we{" "}
            <a href="https://www.ted.com/talks/david_deutsch_chemical_scum_that_dream_of_distant_quasars?language=en">
              make progress
            </a>{" "}
            ?
          </>
        ),
        description:
          "Progress comes from solving problems. Problems are inevitable, but also solvable. In all domains of human pursuit, we make guesses on how to solve our problems and expose these guesses to criticism.",
      },
    ],
  },
  {
    name: "Politics",
    description:
      "Critical rationalism applies Popper’s theory of knowledge to selecting leaders and policies.",
    conceptAreas: [
      {
        name: (
          <>
            Isn’t the purpose of{" "}
            <a href="https://www.economist.com/democracy-in-america/2016/01/31/from-the-archives-the-open-society-and-its-enemies-revisited">
              holding elections
            </a>{" "}
            to determine the will of the people?
          </>
        ),
        description:
          "Even if everyone agreed on a leader and his policies, both will necessarily be riddled with errors. This is the essence of Popper’s fallibilism. Therefore, to make progress in politics, a peaceful process of replacing leaders and policies is vastly superior to anti-democratic alternatives.",
      },
      {
        name: "What about seeking compromise to avoid extreme views?",
        description:
          "There’s no reason to expect that mixing a good policy and a bad policy will yield a good policy, just like mixing two competing scientific theories will likely yield only confusion.",
      },
    ],
  },
  {
    name: "AGI and computer science",
    description: (
      <>
        A philosophy of knowledge has deep implications for how knowledge could
        be created by a computer.
      </>
    ),
    conceptAreas: [
      {
        name: "Haven’t recent advances in machine learning made progress toward artificial general intelligence?",
        description: (
          <>
            Knowledge growth{" "}
            <a href="https://aeon.co/essays/how-close-are-we-to-creating-artificial-intelligence">
              requires conjectures
            </a>
            . Machine learning requires feeding data into fixed algorithms. Data
            is critical, but a general intelligence must be able to{" "}
            <a href="https://www.youtube.com/watch?v=IeY8QaMsYqY&ab_channel=DavidDeutsch">
              create its own guesses{" "}
            </a>
            and explanations.
          </>
        ),
      },
    ],
  },
]
