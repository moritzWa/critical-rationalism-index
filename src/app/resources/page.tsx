import ResourceTable from "@/components/ResourceTable";

// TODO: add filter logic:
// pressing pill button should filter for books articles podcasts etc.
// and pass this state down to the table component

const People = () => (
    <div className="p-8">
      <h1>Resources</h1>
      <p className="pt-2">
        This is a non-comprehensive list of Critical Rationalism related
        resources.
      </p>
      <ResourceTable />
    </div>
);

export default People;
