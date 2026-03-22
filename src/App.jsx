import StorageComponent from "./components/StorageComponent"

function App() {
  return (
    <div 
      className="
        text-base leading-base text-blue-200 bg-blue-900 tablet:bg-blue-950 
        bg-[url('/images/bg-mobile.png')] tablet:bg-[url('/images/bg-desktop.png')] 
        min-h-screen bg-cover tablet:bg-no-repeat tablet:bg-bottom-left  
        tablet:bg-size-[100%_auto] p-6 flex justify-center items-center
      "
    >
      <StorageComponent />
    </div>
  )
}

export default App
