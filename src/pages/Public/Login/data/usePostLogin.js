import useAPICall from "../../../../hooks/useAPICalls";
import en from "../../../../Lang/en.json";
import { LOGIN } from "../../../../utilities/apis";

const usePostLogin = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = () => {
    setError(en.something_went_wrong);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_txt: "OK",
      callBack: (res, token) => {
        const data = res.doc;
        if (data && token && typeof data === "object") {
          setSuccessData(data);
          sessionStorage.setItem("token", token);
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

  const postLogin = (body) => {
    const url = LOGIN;
    callGetData({
      url,
      method: "post",
      statusObj,
      defaultFallback,
      body,
    });
  };
  return [data, error, isLoading, postLogin, setSuccessData, setError];
};

export default usePostLogin;
