import en from "../../../Lang/en.json";
import { INVITE_TEACHER } from "../../../utilities/apis";
import useAPICall from "../../../hooks/useAPICalls";

const usePostInvite = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = (msg = en.something_went_wrong) => {
    setError(msg);
    setSuccessData(undefined);
  };
 
  const statusObj = [
    {
      status_code: 201,
      status_txt: "Created",
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

  const postInvite = (body) => {
    const url = INVITE_TEACHER;
    callGetData({
      url,
      method: "post",
      statusObj,
      defaultFallback,
      body,
    });
  };
  return [data, error, isLoading, postInvite, setSuccessData, setError];
};

export default usePostInvite;
