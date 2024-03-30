import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppState } from "../../store";
import { getSkillApi } from "../../apis/skill";
import { skillAction } from "../../store/action/skill.actiocn";

export const skillService = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: AppState) => (state.skillReducer as any).getAllSkill
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSkillApi();
        dispatch(skillAction(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);

  return data;
};
