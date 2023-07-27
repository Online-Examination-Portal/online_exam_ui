import useAPICall from "../../../../hooks/useAPICalls";
import en from "../../../../Lang/en.json";
import { LOGIN } from "../../../../utilities/apis";

const usePostLogin = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = (msg = en.something_went_wrong) => {
    setError(msg);
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_txt: "OK",
      callBack: (res) => {
        console.log(res)
        // const data = res.doc;
        // if (data && typeof data === "object") {
        //   setSuccessData(data);
        //   // sessionStorage.setItem("token", token);
        // } else {
        //   defaultFallback();
        // }
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
