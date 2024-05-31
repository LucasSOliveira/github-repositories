import { useSelector, useDispatch } from "react-redux";

import {
  setRepository,
  setOpenModal,
  setLoading,
} from "@/store/reducers/repository/repository.slice";

import { fetchRepositoryDetails } from "@/services/repository/repository.service";
import Star from "@/assets/icons/star.svg";



export function Table({ id, tData, ...props }: any) {
  const { loading } = useSelector((state: any) => state.repository);
  const dispatch = useDispatch();

  const selectRepository = async (row: any, openModal: any) => {
    if(!loading) {
      dispatch(setLoading(true));
      const { repository, error } = await fetchRepositoryDetails({
        owner: row.owner,
        name: row.name,
      });
  
      if (error) {
        console.error(error);
        return;
      }
      const resume = { ...row, ...repository };
  
      dispatch(setRepository(resume));
      dispatch(setOpenModal(openModal));
      dispatch(setLoading(false));
    }
  };
  return (
    <div id={id} {...props}>
      {tData.map((row: any, index: number) => (
        <div
          onClick={() => selectRepository(row, true)}
          className="border-b-2 py-4 flex flex-col gap-4 cursor-pointer"
          key={`td-key-${id}-${index}`}
        >
          <div className="flex items-center gap-2">
            <img
              className="w-5 h-5 rounded-full"
              src={row.avatarUrl}
              alt="avatar"
            />
            <h3 className="text-terteary font-medium text-lg">{`${row.owner}/${row.name}`}</h3>
          </div>
          <p>{row.description}</p>
          <div className="flex flex-wrap gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <span
                style={{ backgroundColor: row.languageColor}}
                className="w-2.5 h-2.5 rounded-full"
              />
              <span>{row.primaryLanguage}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={Star} alt="star" />
              <span>{row.stargazers}</span>
            </div>
            <span>Atualizado {row.updateAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
