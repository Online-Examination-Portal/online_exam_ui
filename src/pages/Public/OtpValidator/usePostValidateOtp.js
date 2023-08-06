import useAPICall from "../../../hooks/useAPICalls";
import en from "../../../Lang/en.json";
import { VALIDATE_OTP } from "../../../utilities/apis";

const useValidateOtp = () => {
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

  const validateOtp = (body) => {
    const url = VALIDATE_OTP;
    callGetData({
      url,
      method: "post",
      statusObj, 
      defaultFallback,
      body,
    });
  };
  return [data, error, isLoading, validateOtp, setSuccessData, setError];
};

export default useValidateOtp;
