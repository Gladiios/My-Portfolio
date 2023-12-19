const ProjectImage = ({ picture, projectTitle, index }) => (
  <div
    className={`project-${projectTitle.replace(/\s+/g, "-").toLowerCase()}-div${
      index + 1
    }`}
  >
    <img src={picture.src} alt="" />
  </div>
);

export default ProjectImage;
