import { useDispatch, useSelector } from "react-redux";
import { companyAction } from "../../store/action/company.action";
import { useEffect } from "react";
import { AppState } from "../../store";
import { getCompanyApi } from "../../apis/company";

export const companyService = ({ page, limit }: any) => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: AppState) => (state.companyReducer as any).listCompany
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCompanyApi({ page, limit });
        dispatch(companyAction(res));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return data;
};
