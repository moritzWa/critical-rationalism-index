import React from "react"
import Concept from "./Concept"
import { ConceptSections } from "../page-content/concepts"

const Concepts = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">
          Concepts
        </h2>
        <p id="concepts" className="mt-6 text-xl">
          As a fundamental theory of knowledge, Critical Rationalism spans areas
          such as epistemology, science, politics, decision making, and more.
        </p>
      </div>
      <div>
        {ConceptSections.map(concept => (
          <Concept
            key={concept.name}
            name={concept.name}
            description={concept.description}
            conceptAreas={concept.conceptAreas}
          />
        ))}
      </div>
    </div>
  )
}

export default Concepts
