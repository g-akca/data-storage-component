import StorageHeading from "./StorageHeading";
import StorageInfo from "./StorageInfo";

function StorageComponent() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <StorageHeading />

      <StorageInfo />
    </section>
  )
}

export default StorageComponent;