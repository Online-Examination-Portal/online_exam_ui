import en from "../../../Lang/en.json";
import { LIST_TEACHER_INVITES } from "../../../utilities/apis";
import useAPICall from "../../../hooks/useAPICalls";

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
          console.log("getData:", data)
          const responseData = {columnName : [
            {
              id: 'profile',
              label: 'profile',
              type: 'IconButton'
           },
           {
               id: "sent_to", 
               label: 'Email',
               type: 'email',
   
           },
           { 
               id: "status",
               label: 'Status',
               type: 'static', 
   
           },
           {
               id: 'remove',
               label: 'remove',
               type: 'button'
           }
          ],
          rows: data
        }
          setSuccessData(responseData);
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
 
  const getTeacherInvites = (body) => { 
    const url = LIST_TEACHER_INVITES;
    callGetData({
      url,
      method: "get",
      statusObj,
      defaultFallback,
      body,
    });
  };
  return [data, error, isLoading, getTeacherInvites, setSuccessData, setError];
};

export default useGetInvite;
