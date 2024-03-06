import { ConceptArea, ConceptSection } from "@/app/concepts";
import React from "react";

export const Concept = (props: ConceptSection) => {
  return (
    <div className="bg-white" key={props.name}>
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {props.name}
            </h2>
            <p className="mt-4 text-base text-gray-500">{props.description}</p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {props.conceptAreas.map((conceptArea: ConceptArea, i: number) => (
                <div key={props.name + i}>
                  {conceptArea.url ? (
                    <dt>
                      <a
                        href={conceptArea.url}
                        className="text-lg font-medium leading-6 text-gray-900 underline"
                      >
                        {conceptArea.name}
                      </a>
                    </dt>
                  ) : (
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {conceptArea.name}
                    </dt>
                  )}
                  <dd className="mt-2 text-base text-gray-500">
                    {conceptArea.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
