import PeopleTable from "@/components/PeopleTable";

const People = () => (
  <div>
    <div className="p-8 mt-20">
      <h1>People to follow</h1>
      <p className="pt-2">
        This is a non-comprehensive list of people that have expressed views and
        created artifacts aligned with Critical Rationalism.
      </p>
      <PeopleTable />
      <div className="flex justify-center">
        <div className="pt-10 text-gray-500">
          You are CR aligned/interested and are open to be listed here? Please
          add your information via a{" "}
          <a href="https://github.com/moritzWa/critical-rationalism-index">
            GitHub PR
          </a>{" "}
          or via <a href="https://forms.gle/7agxdsL4qdoeGBGL8">this form</a>{" "}
          (I&apos;ll triage the form submissions every few weeks).
        </div>
      </div>
    </div>
  </div>
);

export default People;
