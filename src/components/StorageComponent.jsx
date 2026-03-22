import StorageHeading from "./StorageHeading";
import StorageInfo from "./StorageInfo";

function StorageComponent() {
  return (
    <section className="flex flex-col gap-4 w-full max-w-135 desktop:flex-row desktop:justify-center desktop:items-end desktop:max-w-none desktop:gap-8">
      <StorageHeading />

      <StorageInfo />
    </section>
  )
}

export default StorageComponent;