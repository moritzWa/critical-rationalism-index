import { ConceptSections } from "@/app/concepts";
import { Concept } from "@/components/Concept";

const Concepts = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-12">
        <h2 className="text-5xl font-bold tracking-tight text-gray-900">
          Concepts
        </h2>
        <p id="concepts" className="max-w-3xl mt-6 text-xl text-center">
          As a fundamental theory of knowledge, Critical Rationalism spans areas
          such as science, politics, decision making, and more.
        </p>
      </div>
      <div>
        {ConceptSections.map((concept) => (
          // @ts-ignore
          <Concept
            key={concept.name}
            name={concept.name}
            description={concept.description}
            conceptAreas={concept.conceptAreas}
          />
        ))}
      </div>
    </div>
  );
};

export default Concepts;
