import Modal from "../../../components/modal/Modal";
import { useDataEntry } from "../hooks/useDataEntry";
import texts from "./../../../texts.json";
import "./../styles/excel-converter.css";

const ExcelConverter = () => {
  const {
    handleDrop,
    handleDragOver,
    handleCloseModal,
    handleCopyText,
    handleChange,
    title,
    message,
    text,
    show,
    textCopy,
  } = useDataEntry();

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="section--xl">
        <h1 className="section-title">
          <span className="gradient-text">
            {texts["/excel-converter"].title}
          </span>
        </h1>
        <p className="section-description">
          {texts["/excel-converter"].description}
        </p>

        <div className="input-file-excel-container">
          <label htmlFor="upload-excel">
            {texts["/excel-converter"].form["label-input1"]}
          </label>
          <input
            className="upload-excel"
            id="upload-excel"
            name="upload-excel"
            type="file"
            onChange={handleChange}
          />
        </div>

        <div className="data-entry-content">
          <button
            type="button"
            onClick={handleCopyText}
            className="data-entry-btn"
          >
            {textCopy ? "Copiado!" : "Copy"}
          </button>
          <textarea
            className="data-entry"
            name="data-entry"
            id="data-entry"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            value={text}
            title="Data entry"
            readOnly
            placeholder="Arrastra un elemento xlsx o xls"
          />
        </div>
      </div>
      <Modal
        title={title}
        message={message}
        show={show}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};

export default ExcelConverter;
