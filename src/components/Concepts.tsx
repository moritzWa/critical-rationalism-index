import React from "react"
import Concept from "./Concept"

const epistemologyConcepts = [
  {
    name: "The growth of human knowledge",
    description:
      "How does human knowledge growh?, How do we know what we know? ",
  },
  {
    name: "The science of science",
    description: "How does science work?",
  },
]

const takingChildrenSeriouslyConcepts = [
  {
    name: "How will credential-less children survive?",
    url: "https://www.takingchildrenseriously.com/how-will-credential-less-children-survive/",
  },
  {
    name: "How do you raise a child to believe in freedom?",
    url: "https://www.takingchildrenseriously.com/how-do-you-raise-a-child-to-believe-in-freedom/",
  },
]

const memesConcepts = [
  {
    name: "Rational and Anti-Rational Memes",
  },
  {
    name: "Memes in Static and Dynamic Societies",
  },
]

const Concepts = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">
          Concepts
        </h2>
        <p className="mt-6 text-xl">
          Note, this is currently still in development and consists mostly of
          placeholders
        </p>
      </div>
      <div>
        <Concept
          name="Epistemology"
          description="small text about the conecpt"
          conceptAreas={epistemologyConcepts}
        />
        <Concept
          name="Taking Children Seriously"
          description="Taking Children Seriously is a parenting movement and educational philosophy whose central idea is that it is possible and desirable to raise and educate children without either doing anything to them against their will or making them do anything against their will."
          conceptAreas={takingChildrenSeriouslyConcepts}
        />
        <Concept
          name="Memes"
          description="Memes are ideas that spread from person to person, and from culture to culture. ....."
          conceptAreas={memesConcepts}
        />
      </div>
    </div>
  )
}

export default Concepts
