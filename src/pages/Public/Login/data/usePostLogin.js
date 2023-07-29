import useAPICall from "../../../../hooks/useAPICalls";
import en from "../../../../Lang/en.json";
import { LOGIN } from "../../../../utilities/apis";

const usePostLogin = () => {
  const [data, error, isLoading, callGetData, setSuccessData, setError] =
    useAPICall(undefined, "");

  const defaultFallback = (msg = en.something_went_wrong) => {
    setError("Invalid Credentials, Please try again");
    setSuccessData(undefined);
  };

  const statusObj = [
    {
      status_code: 200,
      status_txt: "OK",
      callBack: (res) => {
        const data = res.data;
        if (data && typeof data === "object") {
          let userInfo = {
            memberId: data.member.id,
            role: data.member.role,
            org: data.member.organization,
            email: data.member.user.email,
            first_name: data.member.user.first_name,
            last_name: data.member.user.last_name,
            gender: data.member.user.gender,
          };
          setSuccessData(userInfo);
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
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
