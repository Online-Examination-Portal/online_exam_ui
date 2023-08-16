import en from "../../../../Lang/en.json";
import { GET_INVITE_URL } from "../../../../utilities/apis";
import useAPICall from "../../../../hooks/useAPICalls";

const useGetInvite = () => {
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
 
  const getInvite = (invitation_id) => {
    const url = GET_INVITE_URL.replace("{invitation_id}", invitation_id);
    console.log("getinviteURL:", GET_INVITE_URL);
    console.log('invitationID:',invitation_id);
    callGetData({
      url,
      method: "get",
      statusObj,
      defaultFallback,
    });
  };
  return [data, error, isLoading, getInvite, setSuccessData, setError];
};

export default useGetInvite;
