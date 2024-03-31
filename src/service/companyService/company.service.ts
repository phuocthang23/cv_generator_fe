import { useDispatch, useSelector } from "react-redux";
import {
  companyAction,
  companyDetailAction,
} from "../../store/action/company.action";
import { useEffect } from "react";
import { AppState } from "../../store";
import {
  getAllCompanyApi,
  getCompanyApi,
  getOneCompanyApi,
} from "../../apis/company";

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

export const companyDetail = (id: any) => {
  const dispatch = useDispatch();
  const dataJob = useSelector(
    (state: AppState) => (state.companyReducer as any).companyDetail
  );

  const relatedJobs = useSelector(
    (state: AppState) => (state.companyReducer as any).listCompany
  );

  const page = 1;
  const limit = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getOneCompanyApi(id);
        dispatch(companyDetailAction(res));

        const relatedCompanyData: any = await getCompanyApi({ page, limit });
        const filteredRelatedJobs = relatedCompanyData.data;
        dispatch(companyAction(filteredRelatedJobs));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { dataJob, relatedJobs };
};
