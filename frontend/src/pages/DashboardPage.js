import PersonalArgumentList from "../components/dashboard/PersonalArgumentList";
import PreviewSources from "../components/sources/PreviewSources";
import SeparatorResponsive from "../components/common/SeparatorResponsive";
import { useDashBoardContext } from "../lib/dashboardPageContext";

const DashboardPage = () => {
  const { sources, onSetSources, argumentsLoading } = useDashBoardContext();
  return (
    <main className="container mx-auto px-4 py-8 text-center dark:text-primary-light md:flex md:flex-row gap-4">
      <div className="flex-1 flex flex-col items-center gap-4">
        <h1 className="text-2xl">Saved Arguments</h1>
        <PersonalArgumentList />
      </div>
      <SeparatorResponsive />
      <div className="flex-1">
        {!argumentsLoading && (
          <PreviewSources
            sources={sources}
            onSetSources={onSetSources}
            editable={true}
          />
        )}
      </div>
    </main>
  );
};

export default DashboardPage;
