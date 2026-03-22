import logoImg from "/images/logo.svg";
import documentIcon from "/images/icon-document.svg";
import folderIcon from "/images/icon-folder.svg";
import uploadIcon from "/images/icon-upload.svg";

function StorageHeading() {
  return (
    <section 
      className="
        bg-blue-850 rounded-l-[10px] rounded-tr-[100px] rounded-br-[10px] p-10 flex flex-col gap-8 
        shadow-[0_75px_100px_rgba(0,0,0,0.25)] tablet:max-w-87.5
      "
    >
      <img src={logoImg} alt="Fylo logo" className="w-33.75" />

      <div className="grid grid-cols-[48px_48px_48px] gap-4 h-12">
        <button type="button" className="bg-blue-950 rounded-[10px] flex justify-center items-center cursor-pointer">
          <img src={documentIcon} alt="Document icon" />
        </button>

        <button type="button" className="bg-blue-950 rounded-[10px] flex justify-center items-center cursor-pointer">
          <img src={folderIcon} alt="Folder icon" />
        </button>

        <button type="button" className="bg-blue-950 rounded-[10px] flex justify-center items-center cursor-pointer">
          <img src={uploadIcon} alt="Upload icon" />
        </button>
      </div>
    </section>
  )
}

export default StorageHeading;