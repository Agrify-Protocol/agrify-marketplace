import BackButton from "@/components/Common/BackButton/BackButton";
import PageLoader from "@/components/Common/PageLoader/PageLoader";
import ProjectIntro from "@/components/ProjectPageComponents/ProjectIntro/ProjectIntro";
import SectionParent from "@/components/ProjectPageComponents/SectionParent/SectionParent";
import SectionTabs from "@/components/ProjectPageComponents/SectionTabs/SectionTabs";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import { projectSections } from "@/context/ProjectsPageContext/constants";
import { useProjectPageContext } from "@/context/ProjectsPageContext/ProjectsPageContext";
import { getSingleProject } from "@/services/api/projects";
import { Box, useToast } from "@chakra-ui/react";
import { useEffect } from "react";

const ProjectPageBody = () => {
  const { setProject, project, tabId, id } = useProjectPageContext();
  const { user } = useAuthContext();
  const toast = useToast();

  useEffect(() => {
    if (user) {
      getSingleProject(id as string, toast).then((result) => {
        if (result) setProject(result);
      });
    }
  }, [id, user]);

  return (
    <Box
      mt={{ base: "40px", lg: "3.215rem" }}
      px={{ base: "24px", lg: "2.625rem" }}
    >
      <BackButton />
      {project ? (
        <>
          <ProjectIntro />
          <SectionTabs
            type="projects"
            sections={projectSections}
            currentSection={tabId}
            id={id}
          />
          <SectionParent />
        </>
      ) : (
        <PageLoader />
      )}
    </Box>
  );
};

export default ProjectPageBody;
