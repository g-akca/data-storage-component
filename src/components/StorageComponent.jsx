import StorageHeading from "./StorageHeading";
import StorageInfo from "./StorageInfo";

function StorageComponent() {
  return (
    <section className="flex flex-col gap-4 w-full max-w-135">
      <StorageHeading />

      <StorageInfo />
    </section>
  )
}

export default StorageComponent;