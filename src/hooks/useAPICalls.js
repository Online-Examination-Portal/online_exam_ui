import axios from "axios";
import { useState } from "react";

const useAPICall = (defaultData, defaultError) => {
  //handling States
  //this must be set to false
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(defaultData);
  const [error, setError] = useState(defaultError);

  const callAPI = ({
    url = "",
    method = "get",
    defaultFallback = () => {},
    statusObj = [],
    body,
    config = {},
    params,
  }) => { 
    // merging all the configurations
    const axiosConfigObject = {
      ...config,
      method,
      url,
      data: body,
      headers: {
        ...(config.headers || {}),
        token: sessionStorage.getItem("token") || "",
      },
      params,
    };
    //setting loading to true pre-call
    setIsLoading(true);
    //axios call
    axios(axiosConfigObject)
      .then((res) => {
        if (res?.status && res?.statusText) {
          //finding the matching status
          let statusID = statusObj.findIndex((status) => {
            return (
              res.status === status?.status_code &&
              (res.statusText || "").toLowerCase() ===
                status?.status_txt.toLowerCase()
            );
          });
          // if status found
          if (statusID >= 0) {
            // running the callback
            if (statusObj[statusID]?.callBack) {
              statusObj[statusID].callBack(res.data, res.headers.token);
            } else {
              console.log("callback is not found for the status");
            }
          } else {
            console.log("status not found");
            defaultFallback();
          }
        }
        // wrong structure
        else {
          console.log("Improper Structure");
          defaultFallback();
        }
      })
      //handling error from API
      .catch((err) => {
        console.log("API error", { err });
        defaultFallback(err.response.data.errors);
      })
      .finally(() => {
        //turning the loader off
        setIsLoading(false);
      });
  };
  return [data, error, isLoading, callAPI, setData, setError, setIsLoading];
};

export default useAPICall;
