import { useEffect, useState } from "react";
import { PageFragment } from "./fragment";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { cropString } from "../utils";
import { fetchProjects } from "../fetch";

function SearchPage() {
  enum ViewEnum {Plate, List};
  const str2view = (str: string) => { return {"plate": ViewEnum.Plate, "list": ViewEnum.List}[str]; }
  const view2str = (view: ViewEnum) => { return {[ViewEnum.Plate]: "plate", [ViewEnum.List]: "list"}[view]; } 
  const [view, setView] = useState(str2view(localStorage.getItem("view") ?? "plate") ?? ViewEnum.Plate);
  const setView2 = (newView: ViewEnum) => {
    localStorage.setItem('view', view2str(newView));
    setView(newView);
  }
  const navigate = useNavigate();
  const [projectsData, setProjectsData] = useState<any>();

  useEffect(() => {
    fetchProjects().then((newProjectsData) => setProjectsData(newProjectsData));
  }, [])

  if (!projectsData) return <></>;

  const makePlate = () => {
    return <div className="d-flex flex-row flex-wrap gap-3 justify-content-around rounded">
      {projectsData.map((project: any)=>{
        return (
          <Card onClick={()=>navigate(`/projects/${project.id}`)} key={project.id} bg="primary" text="white" className="cursor-pointer">
            <Card.Header>{cropString(project.name, 30)}</Card.Header>
            <Card.Img src={project.thumbnail} ></Card.Img>
          </Card>
        );
      })}
    </div>
  }
  const makeList = () => {
    return <div className="d-flex flex-column gap-3 justify-content-start rounded">
      {projectsData.map((project: any)=>{
        return (
          <div onClick={()=>navigate(`/projects/${project.id}`)} key={project.id} className="border border-primary hover-bg-primary-25 cursor-pointer d-flex flex-row gap-3">
            <Image src={project.thumbnail} />
            <div>
              <h3>{project.name}</h3>
              <div>Трек: {project.track_name}</div>
            </div>
          </div>
        );
      })}
    </div>
  }
  return (
    <PageFragment>
      <div style={{
      maxWidth: "var(--bs-breakpoint-lg)",
      alignSelf: "center",
    }} className="d-flex flex-column gap-3 py-3">
        <div className="d-flex flex-row gap-3 align-items-center">
          <div>Формат вывода проектов:</div>
          <div onClick={()=>setView2(ViewEnum.Plate)} className="hover-bg-primary-25 cursor-pointer text-center border border-primary flex-grow-1 p-3">Плитки</div>
          <div onClick={()=>setView2(ViewEnum.List)} className="hover-bg-primary-25 cursor-pointer text-center border border-primary flex-grow-1 p-3">Список</div>
        </div>
        <div className="border border-primary bg-primary-25 p-3 rounded">
          <h2 className="text-center">Все проекты</h2>
        </div>
        {{[ViewEnum.Plate]: makePlate, [ViewEnum.List]: makeList}[view]()}
      </div>
    </PageFragment>
  );
}

export default SearchPage;
