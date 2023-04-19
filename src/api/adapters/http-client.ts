import axios from "axios";
import { HttpClientRequestResult, HttpClient, ConfigInstance, SendableEvents } from "../../types";

const getHttpClient = (configInstance: ConfigInstance): HttpClient => {
  console.log('getHttpClient()');
  console.log('configInstance > ',configInstance);
  return {
    sendRequest: async (data: any): Promise<HttpClientRequestResult> => {
      const result = await axios.post(
        `${configInstance.serviceHost}:${configInstance.servicePort}`,
        {
          data
        }
      );
      return {
        status: result.status,
        data: result.data,
      };
    },
  };
};

export default getHttpClient;
