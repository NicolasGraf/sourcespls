import PersonalArgumentList from "../../components/dashboard/PersonalArgumentList";
import SeparatorResponsive from "../../components/common/SeparatorResponsive";
import PreviewSources from "../../components/sources/PreviewSources";
import { useDashBoardContext } from "../../lib/dashboardPageContext";

const SavedArgsPage = () => {
  const { selectedSources, updateSources } = useDashBoardContext();
  console.log(selectedSources);

  return (
    <div className=" md:flex md:flex-row gap-4">
      <div className="flex-1 flex flex-col items-center gap-4">
        <h1 className="text-2xl">Arguments</h1>
        <PersonalArgumentList />
      </div>
      <SeparatorResponsive />
      <div className="flex-1">
        <PreviewSources
          sources={selectedSources}
          onSetSources={updateSources}
          editable={true}
        />
      </div>
    </div>
  );
};

export default SavedArgsPage;
