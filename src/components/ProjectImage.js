import { useTranslation } from "next-i18next";
const ProjectImage = ({ picture, projectTitle, index }) => {
  const { t } = useTranslation("common");

  const translatedText = picture.text ? t(picture.text) : "";
  const translatedTextAfter = picture.textAfter ? t(picture.textAfter) : "";

  return (
    <div
      className={`project-${projectTitle
        .replace(/\s+/g, "-")
        .toLowerCase()}-div${index + 1}`}
    >
      {translatedText && <p>{translatedText}</p>}
      <img src={picture.src} alt={t(picture.alt)} />
      {translatedTextAfter && <p>{translatedTextAfter}</p>}
    </div>
  );
};

export default ProjectImage;
