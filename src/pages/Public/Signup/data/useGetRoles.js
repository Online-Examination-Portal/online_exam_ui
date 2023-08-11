import en from "../../../../Lang/en.json";
import { GET_ROLES } from "../../../../utilities/apis";
import useAPICall from "../../../../hooks/useAPICalls";

const useGetRoles = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = (msg = en.something_went_wrong) => {
    setError(true);
    setSuccessData(undefined);
  };
 
  const statusObj = [
    {
      status_code: 200,
      status_txt: "OK",
      callBack: (res) => {
        const data = res.data;
        if (data && typeof data === "object") {
          setSuccessData(data);
        } else {
          defaultFallback();
        }
      },
    },
    {
      status_txt: "Bad Request",
      status_code: 400,
      callBack: defaultFallback,
    },
    {
      status_txt: "Internal Server Error",
      status_code: 500,
      callBack: defaultFallback,
    },
  ];
 
  const getRoles = (body) => {
    const url = GET_ROLES;
    callGetData({
      url,
      method: "get",
      statusObj,
      defaultFallback,
      body,
    });
  };
  return [data, error, isLoading, getRoles, setSuccessData, setError];
};

export default useGetRoles;
